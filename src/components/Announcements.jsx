'use client';
import Image from 'next/image';

export default function Announcements({ announcements, siteColor }) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold" style={{ color: siteColor }}>
        おしらせ
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {announcements.map(({ title, img }) => (
          <article
            key={title}
            className="cursor-pointer overflow-hidden rounded-lg border shadow transition-shadow hover:shadow-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-4 text-lg font-semibold">{title}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
