'use client';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// SwiperのCSSをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Announcements({ announcements, siteColor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const handleOpenModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

  return (
    <>
      <section id="announcements">
        <h2 className="mb-6 text-3xl font-bold" style={{ color: siteColor }}>
          お知らせ
        </h2>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <article
              key={announcement.title}
              className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
              onClick={() => handleOpenModal(announcement)}
            >
              <p className="text-lg font-semibold text-gray-800">
                {announcement.title}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedAnnouncement && (
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              {selectedAnnouncement.title}
            </h3>
            {selectedAnnouncement.images &&
              selectedAnnouncement.images.length > 0 && (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                  className="mb-4"
                >
                  {selectedAnnouncement.images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={src}
                        alt={`${selectedAnnouncement.title} ${index + 1}`}
                        width={800}
                        height={450}
                        className="w-full rounded-md object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            <p className="text-gray-700">{selectedAnnouncement.description}</p>
          </div>
        )}
      </Modal>
    </>
  );
}
