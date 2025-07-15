'use client';
import Image from 'next/image';
// Swiper のコンポーネントとモジュール
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper の CSS
import 'swiper/css';

export default function Slider({ slides }) {
  // スライダー
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={20}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="mt-3 h-[40vw] w-full md:h-96"
    >
      {slides.map((slide, i) => {
        return (
          <SwiperSlide
            key={`${slide.title}-${i}`}
            style={{ width: '75%', maxWidth: '800px' }}
          >
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              sizes="(max-width: 768px) 100vw, 75vw"
              priority={i === 0}
              className="object-contain"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
