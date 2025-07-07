'use client';
import Image from 'next/image';
import { FaTrainSubway } from 'react-icons/fa6';

export default function Lines({ lines, siteColor }) {
  return (
    <section id="lines">
      <h2 className="mb-6 text-3xl font-bold flex gap-3" style={{ color: siteColor }}>
        路線紹介
        <FaTrainSubway className='text-4xl'/>
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        {lines.map(({ name, about, img }) => (
          <article
            key={name}
            className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg"
          >
            {/* <img src={img} alt={name} className="h-40 w-full object-cover" /> */}
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
            <p className="p-5 pt-0 text-center">{about}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
