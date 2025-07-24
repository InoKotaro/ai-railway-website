import Image from 'next/image';

export default function LostItemsResultList({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center text-gray-600 shadow-sm">
        <p className="text-lg">
          お探しの条件に合致する忘れ物は見つかりませんでした。
        </p>
        <p className="mt-2 text-sm">条件を変更して、もう一度お試しください。</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm sm:flex-row sm:items-center"
        >
          <div className="relative h-32 w-full flex-shrink-0 sm:h-24 sm:w-24">
            <Image
              src={item.image || '/images/lost-items/default.jpg'}
              alt={item.name}
              fill
              className="rounded-md object-cover"
              sizes="(max-width: 640px) 100vw, 96px"
            />
          </div>
          <div className="text-gray-700">
            <p>種類： {item.category}</p>
            <p>路線： {item.foundLocation}</p>
            <p>保管： {item.storageLocation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
