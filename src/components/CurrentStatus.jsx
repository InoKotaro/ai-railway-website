'use client';

import { useOperationStatus } from '@/hooks/useOperationStatus';
import { statusMessages } from '@/data/siteData';

export default function CurrentStatus() {
  const statusMessage = useOperationStatus(statusMessages);

  // フックが初期値を返すまで何も表示しない
  if (!statusMessage) {
    return null;
  }

  return (
    <section className="bg-primary text-gray py-3 text-center font-semibold">
      <div className="flex items-center justify-center gap-2 px-2">
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
