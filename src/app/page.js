'use client';

import Header from '@/components/Header';
import CurrentStatus from '@/components/CurrentStatus';
import Slider from '@/components/Slider';
import Announcements from '@/components/Announcements';
import Lines from '@/components/Lines';
import PrSpots from '@/components/PrSpots';
import Footer from '@/components/Footer';

// コンポーネント
import { navLinks } from '@/data/navLinks';
import {
  siteColor,
  announcements,
  lines,
  prSpots,
  sliderSlides,
} from '@/data/siteData';

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col text-gray-900"
      style={{ backgroundColor: '#f0f8fa' }}
    >
      {/* ヘッダー */}
      <Header navLinks={navLinks} siteColor={siteColor} />

      {/* 運転状況 */}
      <CurrentStatus />

      {/* スライダー */}
      <section className="w-full">
        <Slider slides={sliderSlides} />
      </section>

      {/* メインコンテンツ */}
      <main className="mx-auto my-10 max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        {/* お知らせ */}
        <Announcements announcements={announcements} siteColor={siteColor} />
        {/* 路線紹介 */}
        <Lines lines={lines} siteColor={siteColor} />
        {/* おでかけガイド */}
        <PrSpots prSpots={prSpots} siteColor={siteColor} />
      </main>

      {/* フッター */}
      <Footer siteColor={siteColor} />
    </div>
  );
}
