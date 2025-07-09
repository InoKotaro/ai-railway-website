import { MdBusiness, MdOutlineRocketLaunch } from 'react-icons/md';

export default function CompanyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section id="company-info">
        <h1 className="mb-8 flex items-center gap-3 text-3xl font-bold">
          <MdBusiness className="text-4xl" />
          会社案内
        </h1>
        <div className="space-y-8">
          {/* 会社概要 */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">会社概要</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-3">
              <div className="font-semibold text-gray-600 md:col-span-1">
                会社名
              </div>
              <div className="md:col-span-2">AI鉄道株式会社</div>
              <div className="font-semibold text-gray-600 md:col-span-1">
                設立
              </div>
              <div className="md:col-span-2">2024年1月1日</div>
              <div className="font-semibold text-gray-600 md:col-span-1">
                事業内容
              </div>
              <div className="md:col-span-2">
                AIを活用した次世代の鉄道システムの開発と運営
              </div>
            </div>
          </div>
          {/* ビジョン */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-3 flex items-center gap-3 text-2xl font-semibold">
              <MdOutlineRocketLaunch className="text-3xl text-blue-500" />
              私たちのビジョン
            </h2>
            <p className="text-gray-700">
              AI技術を通じて、すべての人に安全で快適な移動体験を提供し、持続可能な社会の実現に貢献します。私たちは、未来の交通インフラを創造するリーディングカンパニーを目指します。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
