'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function BackToTopButton({ isModalOpen }) {
  const [isVisible, setIsVisible] = useState(false);

  // ページスクロール量表示/非表示切り替え
  const toggleVisibility = () => {
    // 100px以上スクロール時表示
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // スクロール停止位置
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // コンポーネントがアンマウントされる時にイベントリスナー削除
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      // モーダル表示/非表示設定
      className={`fixed right-2 bottom-6 h-16 w-16 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 md:right-5 md:bottom-5 md:h-30 md:w-30 ${
        isVisible && !isModalOpen
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-full opacity-0'
      }`}
      role="button"
      tabIndex={isVisible ? 0 : -1}
      aria-label="トップへ戻る"
      style={{ zIndex: 500 }}
    >
      <Image
        src="/images/back-to-up/backtoup.png"
        alt="トップへ戻る"
        fill
        sizes="(max-width: 767px) 64px, 120px"
        className="rounded-full"
      />
    </div>
  );
}
