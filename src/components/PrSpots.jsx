'use client';
import Image from 'next/image';

export default function PrSpots({ prSpots, siteColor }) {
  return (
    <section id="prSpots">
      <h2 className="mb-6 text-3xl font-bold" style={{ color: siteColor }}>
        おでかけガイド
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        {prSpots.map(({ name, img }) => (
          <article
            key={name}
            className="cursor-pointer overflow-hidden rounded-lg border shadow transition-shadow hover:shadow-lg"
          >
            <div className="relative h-40 w-full">
              {/* 元imgタグ <img src={img} alt={name} className="h-40 w-full object-cover" /> */}
              <Image
                src={img}
                alt={name}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-3 text-center font-semibold">{name}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
