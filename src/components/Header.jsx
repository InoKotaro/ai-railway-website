'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header({ navLinks, siteColor, backgroundColor }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニュー表示時に背景のスクロールを無効化
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header
      className="sticky top-0 z-40 py-4"
      style={{ backgroundColor: siteColor }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* ロゴ */}
        <a href="/" className="transition-opacity hover:opacity-80">
          <Image
            src="/images/logo/logo-white.png"
            alt="AI電鉄 ロゴ"
            width={120}
            height={30}
            priority
          />
        </a>

        {/* PC表示時ヘッダーメニュー */}
        <nav className="hidden space-x-5 lg:flex">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="transition-colors hover:underline"
              target={href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))}
        </nav>

        {/* ハンバーガーメニュー閉時*/}
        <div className="flex items-center lg:hidden">
          {/* 開くボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="メニューを開く"
          >
            <FaBars className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* ハンバーガーメニュー開時 */}
      <div
        className={`fixed inset-0 z-50 transform p-6 text-gray-700 transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor }}
      >
        {/* 閉じるボタン */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">メニュー</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="focus:outline-none"
            aria-label="メニューを閉じる"
          >
            <FaTimes className="h-7 w-7" />
          </button>
        </div>

        {/* 各メニュー */}
        <nav className="mt-10 flex flex-col space-y-8">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="border-b border-gray-400 pb-2 text-xl transition-colors hover:text-gray-500"
              onClick={() => setIsMenuOpen(false)}
              target={href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
