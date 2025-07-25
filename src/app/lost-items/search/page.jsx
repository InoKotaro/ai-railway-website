import Link from 'next/link';

import BackToTopButton from '@/components/BackToTopButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LostItemsResultList from '@/components/LostItemsResultList';
import { siteConfig } from '@/config/config';
import { navLinks } from '@/data/navLinks';
import { queryLostItems } from '@/lib/db';

// asyncに変更してサーバーサイドでデータ取得を待機値可能化＝＞非同期関数にする
export default async function LostItemSearchResultPage({ searchParams }) {
  const { line, category } = searchParams;
  // データベースからデータを非同期で取得
  const filteredItems = await queryLostItems(line, category);

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: siteConfig.color.backgroundColor }}
    >
      <Header
        navLinks={navLinks}
        siteColor={siteConfig.color.siteColor}
        backgroundColor={siteConfig.color.backgroundColor}
      />
      <main className="mx-auto w-full max-w-4xl flex-grow px-4 py-8 md:px-6 md:py-12">
        <h1
          className="mb-6 text-3xl font-bold"
          style={{ color: siteConfig.color.siteColor }}
        >
          お忘れ物検索結果
        </h1>
        {/* 条件付きレンダリング:
        1件以上あれば(true)判定で && 右が表示 */}
        {filteredItems.length > 0 && (
          <p className="mb-3 text-sm text-gray-700 sm:text-base">
            お問い合わせは各センターまでお願い致します。
          </p>
        )}
        <LostItemsResultList items={filteredItems} />
        <div className="mt-8 text-center">
          <Link
            href="/#lost-item-search"
            className="inline-block rounded bg-gray-700 px-6 py-3 text-white hover:bg-gray-700"
          >
            お忘れ物検索トップへ
          </Link>
        </div>
      </main>
      <Footer siteColor={siteConfig.color.siteColor} />
      <BackToTopButton />
    </div>
  );
}
