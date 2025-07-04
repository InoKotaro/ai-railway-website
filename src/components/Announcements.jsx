'use client';

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
            <img src={img} alt={title} className="h-48 w-full object-cover" />
            <div className="p-4 text-lg font-semibold">{title}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
