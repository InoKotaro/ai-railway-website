'use client';
import Image from 'next/image';

export default function Lines({ lines, siteColor }) {
  return (
    <section id="lines">
      <h2 className="mb-6 text-3xl font-bold" style={{ color: siteColor }}>
        路線紹介
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        {lines.map(({ name, about, img }) => (
          <article
            key={name}
            className="cursor-pointer overflow-hidden rounded-lg border"
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
                // style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-5 text-2xl text-gray-700 pt-2 pb-2 text-center font-semibold">
              {name}
            </div>
            <p className="p-5 pt-0 text-center">{about}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
