import { PiCircleBold } from 'react-icons/pi';
import { IoIosWarning } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

export const siteColor = '#1e90ff';

// 運転状況
export const statusMessages = [
  {
    text: '全線で平常通り運転しています',
    shortText: '平常運転',
    icon: PiCircleBold,
    color: 'text-green-500',
  },
  {
    text: '【環状線】 混雑の影響で一部列車に遅れが発生しています',
    shortText: '<環状線> 一部列車遅延',
    icon: IoIosWarning,
    color: 'text-yellow-500',
  },
  {
    text: '【湾岸線】 強風の影響で運転を見合わせています',
    shortText: '<湾岸線> 運転見合わせ',
    icon: RxCross2,
    color: 'text-red-500',
  },
];

// スライド loopさせるため配列倍増化
export const sliderSlides = [
  { title: '走り続ける、地域の笑顔とともに', img: '/images/fv/fv_01.png' },
  { title: '新しい始発、3:55', img: '/images/fv/fv_02.jpg' },
  { title: 'アーバンリッジ新高台', img: '/images/fv/fv_03.jpg' },
  { title: 'いつもの駅が旅のはじまりになる', img: '/images/fv/fv_04.jpg' },
  { title: '走り続ける、地域の笑顔とともに', img: '/images/fv/fv_01.png' },
  { title: '新しい始発、3:55', img: '/images/fv/fv_02.jpg' },
  { title: 'アーバンリッジ新高台', img: '/images/fv/fv_03.jpg' },
  { title: 'いつもの駅が旅のはじまりになる', img: '/images/fv/fv_04.jpg' },
];

// お知らせ
export const announcements = [
  {
    title: '海原車両センターイベント',
    images: ['/images/news/depot.jpg', '/images/news/depot2.jpg'],
  },

  { title: 'あいだっくラッピング車両', images: ['/images/news/wrappion.jpg'] },

  {
    title: '湾岸線有料指定席列車ベイライナー',
    images: [
      '/images/news/news_bayliner.jpg',
      '/images/news/news_bayliner2.jpg',
    ],
  },
];

// 路線
export const lines = [
  {
    name: '環状線',
    about:
      '都市の中心を大きく一周する路線。主要ターミナル駅やオフィス街を効率よく結び、乗り換えも便利で通勤・通学、ショッピングに最適です。',
    img: '/images/train/train_loopline.jpg',
  },
  {
    name: '東西線',
    about:
      '都市の東西を横断する路線。住宅地からオフィス街までをスムーズにつなぎ、通勤・通学の足として多くの方に利用されています。',
    img: '/images/train/train_tozailine.jpg',
  },
  {
    name: '南北線',
    about:
      '住宅街とビジネス街を南北に結ぶ路線。沿線には学校や商業施設が多く、毎日の通勤・通学から週末のお出かけまで幅広く活躍します。',
    img: '/images/train/train_nambokuline.jpg',
  },
  {
    name: '湾岸線',
    about:
      '海沿いのエリアを走る路線。ウォーターフロント開発地域や物流拠点を結びます。観光地や商業施設へのアクセスに最適です。',
    img: '/images/train/train_wanganline.jpg',
  },
];

// おでかけ
export const prSpots = [
  {
    name: 'グランド・サンプルホテルズ',
    // トップ用画像
    img: '/images/outing/hotel_01.jpg',
    description: '',
    images: [
      // スライド用画像
      '/images/outing/hotel_01.jpg',
      '/images/outing/hotel_02.jpg',
      '/images/outing/hotel_03.jpg',
      '/images/outing/hotel_04.jpg',
    ],
  },
  {
    name: 'fureAIショッピングモール',
    img: '/images/outing/sc_01.jpg',
    images: [
      '/images/outing/sc_01.jpg',
      '/images/outing/sc_02.jpg',
      '/images/outing/sc_03.jpg',
      '/images/outing/sc_04.jpg',
    ],
  },
  {
    name: 'オーシャンミュージアム浜里',
    img: '/images/outing/aqua_01.jpg',
    images: [
      '/images/outing/aqua_01.jpg',
      '/images/outing/aqua_02.jpg',
      '/images/outing/aqua_03.jpg',
      '/images/outing/aqua_04.jpg',
    ],
  },
  {
    name: 'うさぴょんランド',
    img: '/images/outing/themepark_01.jpg',
    images: [
      '/images/outing/themepark_01.jpg',
      '/images/outing/themepark_02.jpg',
      '/images/outing/themepark_03.jpg',
      '/images/outing/themepark_04.jpg',
    ],
  },
];
