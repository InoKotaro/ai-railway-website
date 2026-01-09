// app/layout.js
import './globals.css';

import { Noto_Sans_JP } from 'next/font/google';

import { siteConfig } from '../config/config';

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
      <body
        className={notoSansJP.className}
        style={{ '--site-bg': siteConfig.color.backgroundColor }}
      >
        {children}
      </body>
    </html>
  );
}
