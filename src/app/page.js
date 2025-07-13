import Header from '@/components/Header';
import CurrentStatus from '@/components/CurrentStatus';
import Slider from '@/components/Slider';
import Announcements from '@/components/Announcements';
import Lines from '@/components/Lines';
import PrSpots from '@/components/PrSpots';
import Safety from '@/components/Safety';
import Company from '@/components/Company';
import Footer from '@/components/Footer';
import { FaWalking } from 'react-icons/fa';

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
      <Slider slides={sliderSlides} />

      <section className="w-full py-16">
        {/* お知らせ */}
        <div className="mx-auto max-w-6xl px-4 pt-5 sm:px-6 lg:px-8">
          <Announcements announcements={announcements} siteColor={siteColor} />
        </div>

        {/* 路線紹介 */}
        <div className="mx-auto mt-17 max-w-6xl px-4 sm:px-6 lg:px-8">
          <Lines lines={lines} siteColor={siteColor} />
        </div>

        {/* おでかけガイド */}
        <div className="mx-auto mt-17 max-w-6xl px-4 sm:px-6 lg:px-8">
          <PrSpots prSpots={prSpots} siteColor={siteColor} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2
          className="mb-6 flex gap-0.5 text-3xl font-bold"
          style={{ color: siteColor }}
        >
          安全・安心への取り組み / 会社案内
          <FaWalking className="text-4xl" />
        </h2>

        {/* 安心安全＆会社案内 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Safety siteColor={siteColor} />
          <Company siteColor={siteColor} />
        </div>
      </section>

      {/* フッター */}
      <Footer siteColor={siteColor} />
    </div>
  );
}
