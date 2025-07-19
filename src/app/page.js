'use client';

import Link from 'next/link';
import { useState } from 'react';

import Announcements from '@/components/Announcements';
import BackToTopButton from '@/components/BackToTopButton';
import Company from '@/components/Company';
import CurrentStatus from '@/components/CurrentStatus';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Lines from '@/components/Lines';
import LostItemSearch from '@/components/LostItemSearch';
import PrSpots from '@/components/PrSpots';
import Safety from '@/components/Safety';
import Slider from '@/components/Slider';
import { siteConfig } from '@/config/config';
// コンポーネント
import { navLinks } from '@/data/navLinks';
import { announcements, lines, prSpots, sliderSlides } from '@/data/siteData';

export default function Home() {
  const [isAnnouncementsModalOpen, setIsAnnouncementsModalOpen] =
    useState(false);
  const [isPrSpotsModalOpen, setIsPrSpotsModalOpen] = useState(false);
  // どれかモーダル表示中か判定
  const isAnyModalOpen = isAnnouncementsModalOpen || isPrSpotsModalOpen;

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: siteConfig.color.backgroundColor }}
    >
      {/* ヘッダー */}
      <Header
        navLinks={navLinks}
        siteColor={siteConfig.color.siteColor}
        backgroundColor={siteConfig.color.backgroundColor}
      />

      {/* 運転状況 */}
      <CurrentStatus />

      {/* スライダー */}
      <Slider slides={sliderSlides} />

      <section className="w-full md:mt-16">
        {/* お知らせ */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:pt-5">
          <Announcements
            announcements={announcements}
            siteColor={siteConfig.color.siteColor}
            onModalToggle={setIsAnnouncementsModalOpen}
          />
        </div>

        {/* お忘れ物検索 */}
        <div className="mx-auto mt-9 max-w-6xl px-4 sm:px-6 md:mt-17 lg:px-8">
          <LostItemSearch siteColor={siteConfig.color.siteColor} />
        </div>

        {/* 路線紹介 */}
        <div className="mx-auto mt-9 max-w-6xl px-4 sm:px-6 md:mt-17 lg:px-8">
          <Lines lines={lines} siteColor={siteConfig.color.siteColor} />
        </div>

        {/* おでかけガイド */}
        <div className="mx-auto mt-9 max-w-6xl px-4 sm:px-6 md:mt-17 lg:px-8">
          <PrSpots
            prSpots={prSpots}
            siteColor={siteConfig.color.siteColor}
            onModalToggle={setIsPrSpotsModalOpen}
          />
        </div>
      </section>

      {/* 安心安全＆会社案内 */}
      <section
        className="mx-auto mt-9 max-w-6xl scroll-m-20 px-4 sm:px-6 md:mt-17 lg:px-8"
        id="safety-company"
      >
        <h2
          className="mb-3 flex gap-3 text-2xl font-bold md:text-3xl lg:mb-6 lg:text-3xl"
          style={{ color: siteConfig.color.siteColor }}
        >
          安全・安心への取り組み / 会社案内
        </h2>
        {/* カード */}
        <div className="mb-9 grid grid-cols-1 gap-8 md:grid-cols-2">
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

      {/* トップへ戻るボタン */}
      <BackToTopButton isModalOpen={isAnyModalOpen} />
    </div>
  );
}
