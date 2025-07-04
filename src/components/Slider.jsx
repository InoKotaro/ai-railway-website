'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-96">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ${
            i === current ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover"
            style={{ objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  );
}
