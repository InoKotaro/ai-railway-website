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
  { title: '海原車両センターイベント', img: '/images/news/news_depot.jpg' },
  { title: 'あいだっくラッピング車両', img: '/images/news/news_wrapping.jpg' },
  {
    title: '湾岸線有料指定席列車ベイライナーデビュー',
    img: '/images/news/news_bayliner.jpg',
  },
];

// 路線
export const lines = [
  { name: '環状線', img: '/images/train/train_loopline.jpg' },
  { name: '東西線', img: '/images/train/train_tozailine.jpg' },
  { name: '南北線', img: '/images/train/train_nambokuline.jpg' },
  { name: '湾岸線', img: '/images/train/train_wanganline.jpg' },
];

// おでかけ
export const prSpots = [
  {
    name: 'グランド・サンプルホテルズTokyo',
    img: '/images/outing/hotel_01.jpg',
  },
  { name: 'fureAIショッピングモール', img: '/images/outing/sc_01.jpg' },
  { name: 'オーシャンミュージアム浜里', img: '/images/outing/aqua_01.jpg' },
  { name: '東京ぴょんぴょんランド', img: '/images/outing/themepark_01.jpg' },
];
