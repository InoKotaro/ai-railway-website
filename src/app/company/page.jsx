import Image from 'next/image';

import BackToTopButton from '@/components/BackToTopButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { siteConfig } from '@/config/config';
import { navLinks } from '@/data/navLinks';

export default function CompanyPage() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: siteConfig.color.background }}
    >
      <Header navLinks={navLinks} siteColor={siteConfig.color.siteColor} />
      <main className="mx-auto w-full max-w-5xl flex-grow text-gray-700">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
          <h1
            className="mb-3 text-center text-3xl font-bold lg:text-4xl"
            style={{ color: siteConfig.color.siteColor }}
          >
            会社案内
          </h1>
        </div>

        {/* CEOセクション */}
        <section className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold">代表取締役社長 ご挨拶</h2>
          <div className="flex flex-col items-center gap-6 px-7 md:flex-row md:justify-center">
            <Image
              src="/images/company/company_java.jpg"
              alt="代表取締役社長"
              className="mx-auto w-full max-w-sm rounded-md md:mx-0"
              width={384}
              height={384}
            />
            <div className="text-left">
              <h3 className="text-center text-xl font-semibold">
                <ruby className="text-2xl">
                  蛇葉<rt>Java</rt> 豪<rt>Go</rt>
                </ruby>
              </h3>
              <p className="mt-2 whitespace-pre-wrap">
                {`私は現場で鉄道業務の経験を積み、本社では得意なシステム開発を軸に駅システムなどIT化を推進してまいりました。
AI電鉄では、これまで培ってきた現場の知見と最先端のIT技術を活かし、すべてのお客様にとって鉄道がより快適で、便利で、安心してご利用いただける存在となるよう、日々挑戦を続けております。
これからも地域に根ざし、変化する時代のニーズに応え、常に進化を続ける鉄道会社を目指してまいります。
皆さまの変わらぬご支援とご愛顧を賜りますようお願い申し上げます。`}
              </p>
            </div>
          </div>
        </section>

        {/* 会社情報テーブル */}
        <section className="mb-13 text-center md:mb-30">
          <h2 className="mb-6 text-2xl font-bold">会社概要</h2>
          <div className="overflow-x-auto px-7">
            <table className="mx-auto min-w-full border border-gray-700 text-left">
              <tbody>
                <tr className="border-b">
                  <th className="bg-gray-200 px-4 py-2">会社名</th>
                  <td className="px-4 py-2">AI電鉄株式会社</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-200 px-4 py-2">設立年月日</th>
                  <td className="px-4 py-2">1930年0月0日</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-200 px-4 py-2">本社所在地</th>
                  <td className="px-4 py-2">
                    東京都千代田区0-0-0 AI電鉄本社ビル
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-200 px-4 py-2">資本金</th>
                  <td className="px-4 py-2">3000億円</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-200 px-4 py-2">代表者</th>
                  <td className="px-4 py-2">蛇葉 豪（代表取締役社長）</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-200 px-4 py-2">事業内容</th>
                  <td className="px-4 py-2">
                    鉄道事業・不動産事業・リテール事業
                  </td>
                </tr>
                <tr>
                  <th className="bg-gray-200 px-4 py-2">従業員数</th>
                  <td className="px-4 py-2">1,300名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer siteColor={siteConfig.color.siteColor} />

      {/* トップへ戻るボタン */}
      <BackToTopButton />
    </div>
  );
}
