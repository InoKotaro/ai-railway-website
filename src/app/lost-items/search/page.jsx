import Link from 'next/link';

import LostItemsResultList from '@/components/LostItemsResultList';
import { siteConfig } from '@/config/config';
import { queryLostItems } from '@/lib/db';

// asyncに変更してサーバーサイドでデータ取得を待機値可能化＝＞非同期関数にする
export default async function LostItemSearchResultPage({ searchParams }) {
  const { line, category } = searchParams;
  // データベースからデータを非同期で取得
  const filteredItems = await queryLostItems(line, category);

  return (
    <div
      className="flex min-h-screen flex-col px-4 py-8 md:px-6 md:py-12"
      style={{ backgroundColor: siteConfig.color.backgroundColor }}
    >
      <main className="mx-auto w-full max-w-4xl">
        <h1
          className="mb-6 text-3xl font-bold"
          style={{ color: siteConfig.color.siteColor }}
        >
          お忘れ物検索結果
        </h1>
        <LostItemsResultList items={filteredItems} />
        <div className="mt-8 text-center">
          <Link
            href="/#lost-item-search"
            className="inline-block rounded bg-gray-600 px-6 py-3 text-white hover:bg-gray-700"
          >
            もう一度検索する
          </Link>
        </div>
      </main>
    </div>
  );
}
