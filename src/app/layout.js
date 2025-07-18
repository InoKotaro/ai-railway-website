// app/layout.js
import './globals.css';

import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'AI電鉄',
  description: 'AI電鉄の公式サイト',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
