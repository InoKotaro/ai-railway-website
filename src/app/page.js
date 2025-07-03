'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import Announcements from '@/components/Announcements';
import Lines from '@/components/Lines';
import PrSpots from '@/components/PrSpots';
import Footer from '@/components/Footer';
// コンポーネント
import { navLinks } from '@/data/navLinks';
import {
  darkTurquoise,
  operationStatusMessages,
  announcements,
  lines,
  prSpots,
  sliderSlides,
} from '@/data/siteData';

export default function Home() {
  //運転状況========================================================
  // 表示するメッセージの状態を管理、初期値は配列0番
  const [statusMessage, setStatusMessage] = useState(
    operationStatusMessages[0],
  );

  // ページがブラウザで読み込まれた時に一度だけ実行されるフック
  useEffect(() => {
    // メッセージリストからランダムなインデックスを計算
    const randomIndex = Math.floor(
      Math.random() * operationStatusMessages.length,
    );
    // 状態をランダムに選ばれたメッセージで更新
    setStatusMessage(operationStatusMessages[randomIndex]);
  }, []); // 空の依存配列 [] は、この処理がマウント時に一度だけ実行されることを意味
  //===============================================================

  return (
    <div
      className="flex min-h-screen flex-col text-gray-900"
      style={{ backgroundColor: '#f0f8fa' }}
    >
      {/* ヘッダー */}
      <Header navLinks={navLinks} darkTurquoise={darkTurquoise} />

      {/* 運転状況 */}
      <section
        className="py-3 text-center font-semibold text-white"
        style={{ backgroundColor: darkTurquoise }}
      >
        <div className="flex items-center justify-center gap-2">
          <span>現在の運転状況：</span>
          {/* statusMessageがオブジェクトなので、iconとtextをそれぞれレンダリング */}
          {/* statusMessage.iconが存在すれば、そのコンポーネントを描画 */}
          {statusMessage.icon && (
            <statusMessage.icon className="inline-block" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      </section>

      {/* スライダー */}
      <section className="w-full">
        <Slider slides={sliderSlides} />
      </section>

      {/* メインコンテンツ */}
      <main className="mx-auto my-10 max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        {/* お知らせ */}
        <Announcements
          announcements={announcements}
          darkTurquoise={darkTurquoise}
        />
        {/* 路線紹介 */}
        <Lines lines={lines} darkTurquoise={darkTurquoise} />
        {/* おでかけガイド */}
        <PrSpots prSpots={prSpots} darkTurquoise={darkTurquoise} />
      </main>

      {/* フッター */}
      <Footer darkTurquoise={darkTurquoise} />
    </div>
  );
}
