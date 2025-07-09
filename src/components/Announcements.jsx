'use client';
import Image from 'next/image';
import { useState } from 'react';
import { MdAnnouncement } from 'react-icons/md';
import Modal from './Modal';

export default function Announcements({ announcements, siteColor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpenModal = (announcement, index) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
    setSelectedIndex(null);
  };

  // 指定された日数後の日付を 'YYYY/MM/DD' 形式で取得する関数
  const getFutureDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const year = date.getFullYear();
    // getMonth()は0から始まるため+1する
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  // 各お知らせに追加する日数のリスト
  // 1つ目に7日後、2つ目に14日後、3つ目に23日後指定
  const daysToAdd = [6, 17, 23];

  // お知らせがない場合は何も表示しない
  if (!announcements || announcements.length === 0) {
    return null;
  }

  return (
    // <section> と <Modal> 2つコンポーネントを返すためフラグメント使用
    // <div> ではレイアウト崩れ原因、HTML構造が複雑になる
    <>
      <section id="announcements">
        <h2
          className="mb-6 flex gap-3 text-3xl font-bold"
          style={{ color: siteColor }}
        >
          お知らせ
          <MdAnnouncement className="text-4xl" />
        </h2>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          {announcements.map((announcement, index) => (
            <div key={announcement.title}>
              <article
                className="cursor-pointer p-4 transition-colors hover:bg-gray-50"
                onClick={() => handleOpenModal(announcement, index)}
              >
                <div className="flex items-center justify-start gap-9">
                  {/* 対応する日付が存在する場合のみ表示 */}
                  {daysToAdd[index] && (
                    <span className="flex-shrink-0 text-sm text-gray-500">
                      {getFutureDate(daysToAdd[index])}
                    </span>
                  )}
                  <p className="text-md text-gray-700">{announcement.title}</p>
                </div>
              </article>
              {index < announcements.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedAnnouncement && (
          <div>
            {selectedAnnouncement.images &&
              selectedAnnouncement.images.length > 0 && (
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {selectedAnnouncement.images.map((src, imgIndex) => (
                    <div key={imgIndex} className="relative aspect-video">
                      <Image
                        src={src}
                        alt={`${selectedAnnouncement.title} ${imgIndex + 1}`}
                        fill
                        className="rounded-md object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}

            {selectedIndex !== null && daysToAdd[selectedIndex] && (
              <p className="mb-4 text-sm text-gray-500">
                {getFutureDate(daysToAdd[selectedIndex])}
              </p>
            )}
            <h3 className="mb-2 text-2xl font-bold text-gray-700">
              {selectedAnnouncement.title}
            </h3>
            <p className="mb-4 whitespace-pre-wrap text-gray-700">
              {selectedAnnouncement.description}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
