'use client';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function LostItemSearch({ siteColor }) {
  const [selectedLine, setSelectedLine] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // 将来的にはAPIから取得
  const lineOptions = ['環状線', '東西線', '南北線', '湾岸線'];
  const categoryOptions = ['傘', '電子機器', '書籍', '衣類', 'その他'];

  const handleSearch = () => {
    // 将来的には、ここでstateの値を使ってDBに問い合わせるAPIを呼び出します
    alert(
      `検索を実行します:\n路線: ${selectedLine || 'すべて'}\n種類: ${selectedCategory || 'すべて'}`,
    );
  };

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
          <select
            value={selectedLine}
            onChange={(e) => setSelectedLine(e.target.value)}
            className="w-full flex-grow cursor-pointer rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:outline-none md:w-auto"
          >
            <option value="">すべての路線</option>
            {lineOptions.map((line) => (
              <option key={line} value={line}>
                {line}
              </option>
            ))}
          </select>

          {/* 種類選択 ドロップダウン */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full flex-grow cursor-pointer rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:outline-none md:w-auto"
          >
            <option value="">すべての種類</option>
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleSearch}
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
