'use client';

import { FaSearch } from 'react-icons/fa';

import { categories, lines } from '@/data/siteData';

// 将来的にはAPIから取得
const lineOptions = ['環状線', '東西線', '南北線', '湾岸線'];
const categoryOptions = ['傘', '電子機器', '書籍', '衣類', 'その他'];

export default function LostItemSearch({ lines, categories, siteColor }) {
  return (
    <section id="lostItem" className="scroll-m-20">
      <h2
        className="mb-3 flex items-center gap-2 text-2xl font-bold md:mb-6 md:gap-1.5 md:text-3xl"
        style={{ color: siteColor }}
      >
        お忘れ物検索
        <FaSearch className="text-2xl md:pt-1 md:text-3xl" />
      </h2>
      <div className="rounded-lg bg-white p-6 text-gray-700 shadow-lg">
        <p className="mb-4">
          駅や電車内でお忘れ物をされた場合は、こちらから検索いただけます。
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          {/* 路線選択 ドロップダウン */}
          <select className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none">
            <option value="">すべての路線</option>
            {lineOptions.map((line) => (
              <option key={line} value={line}>
                {line}
              </option>
            ))}
          </select>

          {/* 種類選択 ドロップダウン */}
          <select className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none">
            <option value="">すべての種類</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md px-6 py-2 font-bold text-white transition-opacity hover:opacity-80 md:w-auto"
            style={{ backgroundColor: siteColor }}
          >
            <FaSearch className="mr-2" />
            検索
          </button>
        </div>
      </div>
    </section>
  );
}
