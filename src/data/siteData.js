export const darkTurquoise = '#00ced1';
import { FaRegCircle } from 'react-icons/fa';
import { IoIosWarning } from 'react-icons/io';
import { ImCross } from 'react-icons/im';

export const operationStatusMessages = [
  {
    text: '全線で平常通り運転しています',
    icon: FaRegCircle,
  },
  {
    text: '【環状線】混雑の影響で一部列車に遅れが発生しています',
    icon: IoIosWarning,
  },
  {
    text: '【湾岸線】強風の影響で運転を見合わせています',
    icon: ImCross,
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
  { title: '最新の快適車両で快走！', img: '/images/slider1.jpg' },
  { title: '湾岸線新路線開業！', img: '/images/slider2.jpg' },
  { title: '安全・安心への取り組み', img: '/images/slider3.jpg' },
];
