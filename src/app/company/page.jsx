export default function CompanyProfile() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      {/* CEOセクション */}
      <section className="mb-16 text-center">
        <h2 className="mb-6 text-2xl font-bold">代表取締役社長</h2>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-center">
          <img
            src="/ceo.jpg"
            alt="代表取締役社長"
            className="mx-auto w-full max-w-xs rounded-md md:mx-0"
          />
          <div className="text-left">
            <h3 className="text-xl font-semibold">山田 太郎</h3>
            <p className="mt-2">
              私たちは地域社会とともに歩み、安心と信頼の輸送サービスを提供し続けます。
            </p>
          </div>
        </div>
      </section>

      {/* 歴史セクション */}
      <section className="mb-16 text-center">
        <h2 className="mb-6 text-2xl font-bold">会社の歴史</h2>

        {/* 創業者 */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-center">
          <img
            src="/founder.jpg"
            alt="創業者"
            className="mx-auto w-full max-w-xs rounded-md md:mx-0"
          />
          <div className="text-left">
            <h3 className="text-xl font-semibold">鈴木 一郎</h3>
            <p className="mt-2">
              1900年に地域交通を支えるべく設立し、多くの人々の暮らしを支えてきました。
            </p>
          </div>
        </div>

        {/* 年表 */}
        <div className="space-y-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-center">
            <span className="text-lg font-bold md:w-24">1900年</span>
            <img
              src="/train_meiji.jpg"
              alt="明治時代の汽車"
              className="mx-auto w-full max-w-xs rounded-md md:mx-0"
            />
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-center">
            <span className="text-lg font-bold md:w-24">1950年</span>
            <img
              src="/train_showa.jpg"
              alt="昭和時代の旧型電車"
              className="mx-auto w-full max-w-xs rounded-md md:mx-0"
            />
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-center">
            <span className="text-lg font-bold md:w-24">1990年</span>
            <img
              src="/train_heisei.jpg"
              alt="平成時代の電車"
              className="mx-auto w-full max-w-xs rounded-md md:mx-0"
            />
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-center">
            <span className="text-lg font-bold md:w-24">2020年</span>
            <img
              src="/train_modern.jpg"
              alt="現代の電車"
              className="mx-auto w-full max-w-xs rounded-md md:mx-0"
            />
          </div>
        </div>
      </section>

      {/* 会社情報テーブル */}
      <section className="text-center">
        <h2 className="mb-6 text-2xl font-bold">会社情報</h2>
        <div className="overflow-x-auto">
          <table className="mx-auto min-w-full border border-gray-300 text-left">
            <tbody>
              <tr className="border-b">
                <th className="bg-gray-100 px-4 py-2">会社名</th>
                <td className="px-4 py-2">AI電鉄株式会社</td>
              </tr>
              <tr className="border-b">
                <th className="bg-gray-100 px-4 py-2">設立年月日</th>
                <td className="px-4 py-2">1900年4月1日</td>
              </tr>
              <tr className="border-b">
                <th className="bg-gray-100 px-4 py-2">本社所在地</th>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="border-b">
                <th className="bg-gray-100 px-4 py-2">資本金</th>
                <td className="px-4 py-2">10億円</td>
              </tr>
              <tr className="border-b">
                <th className="bg-gray-100 px-4 py-2">代表者</th>
                <td className="px-4 py-2">山田 太郎（代表取締役社長）</td>
              </tr>
              <tr className="border-b">
                <th className="bg-gray-100 px-4 py-2">事業内容</th>
                <td className="px-4 py-2">鉄道事業・地域交通サービス</td>
              </tr>
              <tr>
                <th className="bg-gray-100 px-4 py-2">従業員数</th>
                <td className="px-4 py-2">2,500名</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
