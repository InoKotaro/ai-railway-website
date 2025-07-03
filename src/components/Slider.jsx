'use client';

import { useState, useEffect } from 'react';

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
          <img
            src={slide.img}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="bg-opacity-40 absolute bottom-4 left-4 rounded bg-black px-3 py-1 text-white">
            {slide.title}
          </div>
        </div>
      ))}
    </div>
  );
}
