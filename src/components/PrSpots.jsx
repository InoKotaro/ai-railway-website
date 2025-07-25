'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaWalking } from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Modal from './Modal';

export default function PrSpots({ prSpots, siteColor, onModalToggle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const handleOpenModal = (spot) => {
    setSelectedSpot(spot);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSpot(null);
  };

  // モーダルの状態を親コンポーネント(src/page.js)に通知
  // オプショナルチェイニング演算子（?.）使用
  useEffect(() => {
    onModalToggle?.(isModalOpen);
  }, [isModalOpen, onModalToggle]);

  return (
    <>
      <section id="prSpots" className="scroll-m-20">
        <h2
          className="mb-3 flex gap-0 text-2xl font-bold md:mb-6 md:text-3xl"
          style={{ color: siteColor }}
        >
          おでかけガイド
          <FaWalking className="text-3xl md:pt-0.5 md:text-4xl" />
        </h2>
        <div className="grid grid-cols-1 gap-6 text-gray-700 sm:grid-cols-2 md:grid-cols-4">
          {prSpots.map((spot) => (
            <article
              key={spot.name}
              className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => handleOpenModal(spot)}
            >
              <div className="relative h-40 w-full">
                <Image
                  src={spot.img}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <p className="pt-1.5 pl-5">{spot.station}</p>
              <div className="pt-1.5 pb-5 text-center font-semibold">
                {spot.name}
              </div>
              <p className="mr-7 mb-5 text-right"> 詳しく見る &rarr; </p>
            </article>
          ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedSpot && (
          <div>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={selectedSpot.images.length > 1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                waitForTransition: false,
              }}
              className="mb-4 rounded-lg"
            >
              {selectedSpot.images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative aspect-video">
                    <Image
                      src={src}
                      alt={`${selectedSpot.name} ${index + 1}`}
                      fill
                      className="w-full rounded-md object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="whitespace-pre-wrap text-gray-700">
              {selectedSpot.station}
            </p>
            <h3 className="mb-4 text-2xl font-bold text-gray-700">
              {selectedSpot.name}
            </h3>
            <p className="whitespace-pre-wrap text-gray-700">
              {selectedSpot.description}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
