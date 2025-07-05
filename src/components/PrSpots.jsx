'use client';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

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
        <h2 className="mb-6 text-3xl font-bold" style={{ color: siteColor }}>
          おでかけガイド
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          {prSpots.map((spot) => (
            <article
              key={spot.name}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
              <div className="p-3 text-center font-semibold">{spot.name}</div>
            </article>
          ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedSpot && (
          <div>
            <h3 className="mb-4 text-2xl font-bold">{selectedSpot.name}</h3>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="mb-4"
            >
              {selectedSpot.images.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`${selectedSpot.name} ${index + 1}`}
                    width={800}
                    height={450}
                    className="w-full rounded-md object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="text-gray-700">{selectedSpot.description}</p>
          </div>
        )}
      </Modal>
    </>
  );
}
