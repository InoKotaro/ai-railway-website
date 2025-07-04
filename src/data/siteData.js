import { PiCircleBold } from 'react-icons/pi';
import { IoIosWarning } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

export const siteColor = '#1e90ff';

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

export const announcements = [
  { title: '海原車両センターイベント', img: '/images/event1.jpg' },
  { title: 'あいだっくラッピング車両', img: '/images/event2.jpg' },
  {
    title: '湾岸線有料指定席列車ベイライナーデビュー',
    img: '/images/event3.jpg',
  },
];

export const lines = [
  { name: '環状線', img: '/images/line_loop.jpg' },
  { name: '東西線', img: '/images/line_eastwest.jpg' },
  { name: '南北線', img: '/images/line_northsouth.jpg' },
  { name: '湾岸線', img: '/images/line_bay.jpg' },
];

export const prSpots = [
  { name: 'グランド・サンプルホテルズTokyo', img: '/images/pr_hotel.jpg' },
  { name: 'fureAIショッピングモール', img: '/images/pr_shopping.jpg' },
  { name: 'オーシャンミュージアム浜里', img: '/images/pr_museum.jpg' },
  { name: '東京ぴょんぴょんランド', img: '/images/pr_park.jpg' },
];

export const sliderSlides = [
  { title: '走り続ける、地域の笑顔とともに', img: '/images/fv/fv_01.jpg' },
  { title: '湾岸線新路線開業！', img: '/images/slider2.jpg' },
  { title: '安全・安心への取り組み', img: '/images/slider3.jpg' },
  { title: 'test', img: '/images/slider3.jpg' },
];
