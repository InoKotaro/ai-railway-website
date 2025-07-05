'use client';
import Image from 'next/image';

export default function Header({ navLinks, siteColor }) {
  return (
    <header className="py-4" style={{ backgroundColor: siteColor }}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="/" className="transition-opacity hover:opacity-80">
          <Image
            src="/images/logo/logo-white.png" // publicフォルダからのパス
            alt="AI電鉄 ロゴ"
            width={120}
            height={30}
            priority
          />
        </a>
        <nav className="hidden space-x-6 text-white md:flex">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="transition-colors hover:underline"
              target={href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
