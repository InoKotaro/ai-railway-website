'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function LostItemSearch({ lines, categories, siteColor }) {
  const [selectedLine, setSelectedLine] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedLine) {
      params.append('line', selectedLine);
    }
    if (selectedCategory) {
      params.append('category', selectedCategory);
    }
    router.push(`/lost-items/search?${params.toString()}`);
  };

  return (
    <section id="lost-item-search-form" className="scroll-m-20">
      <h2
        className="mb-3 flex gap-2 text-2xl font-bold md:mb-6 md:text-3xl"
        style={{ color: siteColor }}
      >
        お忘れ物検索
        <FaSearch className="text-1xl md:text-1xl mt-1" />
      </h2>
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 gap-4 rounded-lg border bg-white p-6 shadow-sm md:grid-cols-3 md:items-end"
      >
        <div className="md:col-span-1">
          <label
            htmlFor="category-select"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            種類
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-md border-gray-300 p-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">すべて</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-1">
          <label
            htmlFor="line-select"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            路線
          </label>
          <select
            id="line-select"
            value={selectedLine}
            onChange={(e) => setSelectedLine(e.target.value)}
            className="w-full rounded-md border-gray-300 p-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">すべて</option>
            {lines.map((line) => (
              <option key={line.id} value={line.name}>
                {line.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-md px-4 py-2 text-white md:col-span-1"
          style={{ backgroundColor: siteColor }}
        >
          検索
        </button>
      </form>
    </section>
  );
}
