import { MdSecurity } from 'react-icons/md';

export default function SafetyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section id="safety">
        <h1 className="mb-6 flex items-center gap-3 text-3xl font-bold">
          <MdSecurity className="text-4xl" />
          安全対策
        </h1>
        <div className="space-y-4 rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">当社の安全への取り組み</h2>
          <p>
            お客様に安心してご利用いただくため、私たちは日々の安全点検と訓練を徹底しています。...
          </p>
        </div>
      </section>
    </main>
  );
}
