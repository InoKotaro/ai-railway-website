'use client';
import Link from 'next/link';
import { GiRailRoad } from 'react-icons/gi';

import Announcements from '@/components/Announcements';
import Company from '@/components/Company';
import CurrentStatus from '@/components/CurrentStatus';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Lines from '@/components/Lines';
import PrSpots from '@/components/PrSpots';
import Safety from '@/components/Safety';
import Slider from '@/components/Slider';
import { siteConfig } from '@/config/config';
// コンポーネント
import { navLinks } from '@/data/navLinks';
import { announcements, lines, prSpots, sliderSlides } from '@/data/siteData';

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: siteConfig.color.background }}
    >
      {/* ヘッダー */}
      <Header navLinks={navLinks} siteColor={siteConfig.color.siteColor} />

      {/* 運転状況 */}
      <CurrentStatus />

      {/* スライダー */}
      <Slider slides={sliderSlides} />

      <section className="w-full py-16">
        {/* お知らせ */}
        <div className="mx-auto max-w-6xl px-4 pt-5 sm:px-6 lg:px-8">
          <Announcements
            announcements={announcements}
            siteColor={siteConfig.color.siteColor}
          />
        </div>

        {/* 路線紹介 */}
        <div className="mx-auto mt-17 max-w-6xl px-4 sm:px-6 lg:px-8">
          <Lines lines={lines} siteColor={siteConfig.color.siteColor} />
        </div>

        {/* おでかけガイド */}
        <div className="mx-auto mt-17 max-w-6xl px-4 sm:px-6 lg:px-8">
          <PrSpots prSpots={prSpots} siteColor={siteConfig.color.siteColor} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2
          className="mb-6 flex gap-2 text-3xl font-bold"
          style={{ color: siteConfig.color.siteColor }}
        >
          安全・安心への取り組み / 会社案内
        </h2>

        {/* 安心安全＆会社案内 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Link href="/safety" className="block h-full">
            <Safety siteColor={siteConfig.color.siteColor} />
          </Link>
          <Link href="/company" className="block h-full">
            <Company siteColor={siteConfig.color.siteColor} />
          </Link>
        </div>
      </section>

      {/* フッター */}
      <Footer siteColor={siteConfig.color.siteColor} />
    </div>
  );
}
