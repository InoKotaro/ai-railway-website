'use client';
import Image from 'next/image';
import { FaTrainSubway } from 'react-icons/fa6';

export default function Lines({ lines, siteColor }) {
  return (
    <section id="lines" className="scroll-m-20">
      <h2
        className="mb-3 flex gap-0.5 text-2xl font-bold md:mb-6 md:gap-1 md:text-3xl"
        style={{ color: siteColor }}
      >
        路線紹介
        <FaTrainSubway className="pt-1 text-3xl md:pt-1 md:text-4xl" />
      </h2>
      <div className="grid grid-cols-1 gap-6 text-gray-700 sm:grid-cols-2 md:grid-cols-4">
        {lines.map(({ id, name, about, img }) => (
          <article
            key={id}
            className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg"
          >
            {/* 旧<img src={img} alt={name} className="h-40 w-full object-cover" /> */}
            <div className="relative h-40 w-full">
              <Image
                src={img}
                alt={name}
                about={about}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="p-5 pt-2 pb-2 text-center text-2xl font-semibold text-gray-700">
              {name}
            </div>
            <p className="p-5 pt-0 text-left">{about}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
