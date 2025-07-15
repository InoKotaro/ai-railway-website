'use client';
import { statusMessages } from '@/data/siteData';
import { useOperationStatus } from '@/hooks/useOperationStatus';

export default function CurrentStatus() {
  const statusMessage = useOperationStatus(statusMessages);

  // フックが初期値を返すまで何も表示しない
  if (!statusMessage) {
    return null;
  }

  return (
    <section className="bg-primary text-gray md:py-3 pt-2 text-center font-semibold">
      <div className="flex items-center justify-center gap-2 px-2 text-gray-900">
        <span>
          <span>現在の運転状況</span>
        </span>
        {/* アイコン */}
        {statusMessage.icon && (
          <statusMessage.icon
            className={`inline-block text-3xl ${statusMessage.color}`}
          />
        )}

        {/* sm未満で表示 */}
        <span className="inline sm:hidden">{statusMessage.shortText}</span>
        {/* sm以上で表示 */}
        <span className="hidden sm:inline">{statusMessage.text}</span>
      </div>
    </section>
  );
}
