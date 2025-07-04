'use client';

export default function PrSpots({ prSpots, siteColor }) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold" style={{ color: siteColor }}>
        沿線PR
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        {prSpots.map(({ name, img }) => (
          <article
            key={name}
            className="cursor-pointer overflow-hidden rounded-lg border shadow transition-shadow hover:shadow-lg"
          >
            <img src={img} alt={name} className="h-40 w-full object-cover" />
            <div className="p-3 text-center font-semibold">{name}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
