import { IoIosWarning } from 'react-icons/io';
import { PiCircleBold } from 'react-icons/pi';
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
    title: '砂原車両センター特別公開イベント開催！',
    description: `普段は関係者以外立ち入ることができない砂原車両センターを、特別に一般公開いたします。当日は現役の作業員が電車のしくみや点検の様子をわかりやすく解説。
ぜひこの機会に、普段見ることのできない車両センターの裏側をお楽しみください。`,
    images: ['/images/news/news_depot.jpg', '/images/news/news_depot02.jpg'],
  },

  {
    title: 'あいだっくラッピング車両を運転します',
    description: `AI電鉄公式キャラクター「あいだっく」がデザインされたラッピング車両を期間限定で運行します。
あいだっくは、AI（人工知能）とダック（アヒル）を組み合わせたキャラクターです。
走行中のあいだっくラッピング車両を見かけた際は、安全に十分ご注意のうえ、ぜひお楽しみください。みなさまのご乗車をお待ちしております。`,
    images: [
      '/images/news/news_wrapping.jpg',
      '/images/news/news_wrapping02.jpg',
    ],
  },

  {
    title: '湾岸線に有料指定席列車「ベイライナー」デビュー！',
    description: `湾岸線に有料指定席列車「ベイライナー」が誕生。
忙しい朝も、帰り道も、座席指定でゆったり移動。いつもの通勤・通学が、少し特別な時間に変わります。新しい移動の形を、ぜひお試しください。`,

    images: [
      '/images/news/news_bayliner.jpg',
      '/images/news/news_bayliner02.jpg',
    ],
  },
];

// 路線
export const lines = [
  {
    id: 1,
    name: '環状線',
    about:
      '都市の中心を大きく一周する路線。主要ターミナル駅やオフィス街を効率よく結び、乗り換えも便利で通勤・通学、ショッピングに最適です。',
    img: '/images/train/train_loopline.jpg',
  },
  {
    id: 2,
    name: '東西線',
    about:
      '都市の東西を横断する路線。住宅地からオフィス街までをスムーズにつなぎ、通勤・通学の足として多くの方に利用されています。',
    img: '/images/train/train_tozailine.jpg',
  },
  {
    id: 3,
    name: '南北線',
    about:
      '住宅街とビジネス街を南北に結ぶ路線。沿線には学校や商業施設が多く、毎日の通勤・通学から週末のお出かけまで幅広く活躍します。',
    img: '/images/train/train_nambokuline.jpg',
  },
  {
    id: 4,
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
    images: [
      // スライド用画像
      '/images/outing/hotel_01.jpg',
      '/images/outing/hotel_02.jpg',
      '/images/outing/hotel_03.jpg',
      '/images/outing/hotel_04.jpg',
    ],
    station: '環状線  桜橋駅',
    description: `環状線「桜橋駅」近くに位置する五つ星ホテル。
上質なインテリアと快適な設備でお客様をお迎えし、館内には高級ダイニングや温泉施設も充実。
観光・ビジネスともに最適な拠点です。`,
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
    station: '東西線  岩葉台駅',
    description: `家族みんなで楽しめる「fureAIショッピングモール」は、休日には人気芸人によるお笑いライブも開催。広々としたフードコートにはバラエティ豊かなメニューが揃い、お子さまから大人まで大満足。買い物だけでなく、一日中ゆったり過ごせるスポットです。`,
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
    station: '南北線  城宮駅',
    description: `かわいいうさぎたちに会えるだけでなく、アトラクションも充実している「うさぴょんランド」。
小さなお子さまから大人まで楽しめる遊びがいっぱいで、家族みんなの思い出作りにぴったりのスポットです。`,
  },
  {
    name: '海島SEA ISLAND',
    img: '/images/outing/aqua_01.jpg',
    images: [
      '/images/outing/aqua_01.jpg',
      '/images/outing/aqua_02.jpg',
      '/images/outing/aqua_03.jpg',
      '/images/outing/aqua_04.jpg',
    ],
    station: '湾岸線  海島駅',
    description: `オーシャンミュージアム浜里では、色とりどりの魚が泳ぐ巨大水槽と、自慢のカジキマグロショーをお楽しみいただけます。
海の魅力を学べる展示や、家族で参加できるワークショップもあり、大人から子どもまで大満足。
週末のおでかけにぴったりの水族館です。`,
  },
];
