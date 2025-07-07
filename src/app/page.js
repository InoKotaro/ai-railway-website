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

      {/* フッター */}
      <Footer siteColor={siteColor} />
    </div>
  );
}
