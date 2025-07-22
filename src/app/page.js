import PageClient from '@/components/PageClient';
import {
  announcements,
  lines as staticLines, // 路線紹介用の静的データ
  prSpots,
  sliderSlides,
} from '@/data/siteData';

import prisma from '../../lib/prisma.js';

export default async function Page() {
  // 1. DBからお忘れ物検索フォーム用のデータを取得
  const [dbLines, dbCategories] = await Promise.all([
    prisma.line.findMany({
      orderBy: {
        id: 'asc',
      },
    }),
    prisma.category.findMany({
      orderBy: {
        id: 'asc',
      },
    }),
  ]);

  // 2. PageClientコンポーネントにデータを渡す
  return (
    <PageClient
      // お忘れ物検索用
      searchLines={dbLines}
      searchCategories={dbCategories}
      // 路線紹介用
      displayLines={staticLines}
      // その他
      announcements={announcements}
      prSpots={prSpots}
      sliderSlides={sliderSlides}
    />
  );
}
