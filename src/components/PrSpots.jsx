'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaWalking } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Modal from './Modal';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PrSpots({ prSpots, siteColor }) {
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

  return (
    <>
      <section id="prSpots">
        <h2
          className="mb-6 flex gap-0.5 text-3xl font-bold"
          style={{ color: siteColor }}
        >
          おでかけガイド
          <FaWalking className="text-4xl" />
        </h2>
        <div className="grid grid-cols-1 gap-6 text-gray-700 md:grid-cols-4">
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
              <p className="mr-3 mb-3 text-right"> 詳しく見る &rarr; </p>
            </article>
          ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedSpot && (
          <div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={selectedSpot.images.length > 1}
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
