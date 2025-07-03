'use client';

export default function Header({ navLinks, darkTurquoise }) {
  return (
    <header
      className="flex items-center justify-between px-6 py-4"
      style={{ backgroundColor: darkTurquoise }}
    >
      <div className="text-xl font-bold text-white">AI電鉄</div>
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
    </header>
  );
}
