import Image from 'next/image';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { siteConfig } from '@/config/config';
import { navLinks } from '@/data/navLinks';

export default function SafetyPage() {
  return (
    <div
      className="flex min-h-screen flex-col text-gray-700"
      style={{ backgroundColor: siteConfig.color.background }}
    >
      <Header navLinks={navLinks} siteColor={siteConfig.color.siteColor} />
      <main className="flex-grow">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h1
            className="mb-12 text-center text-4xl font-bold"
            style={{ color: siteConfig.color.siteColor }}
          >
            安全・安心への取り組み
          </h1>

          <section className="mb-10 rounded-lg bg-white p-6 shadow-md">
            {/* md:flex-rowで子要素を左から右に横並びにする */}
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-2xl font-semibold">
                  ホームドア全駅設置
                </h2>
                <p className="leading-relaxed">
                  AI電鉄では、すべての駅にホームドアを設置し、お客様の安全を確保しています。
                  ホーム上での転落事故を防ぎ、安心してご利用いただけます。
                </p>
              </div>

              <div className="relative h-64 w-full md:w-1/2">
                <Image
                  src="/images/safety/safety_formdoor.jpg"
                  alt="ホームドアの写真"
                  fill // 親要素に合わせて画像を埋める
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </section>

          {/*  */}
          <section className="mb-10 rounded-lg bg-white p-6 shadow-md">
            {/* flex-direction: row-reverse;で子要素を右から左に横並びにする*/}
            <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-2xl font-semibold">
                  AIロボットで駅構内巡回
                </h2>
                <p className="leading-relaxed">
                  最先端のAIロボットが駅構内を巡回し、トラブルの早期発見や
                  お客様のサポートを行っています。いつでも安心して駅をご利用いただけます。
                </p>
              </div>

              <div className="relative h-64 w-full md:w-1/2">
                <Image
                  src="/images/safety/safety_robot.jpg"
                  alt="駅構内を巡回するAIロボット"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-lg bg-white p-6 shadow-md">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-2xl font-semibold">
                  全駅員の介助講習受講
                </h2>
                <p className="leading-relaxed">
                  すべての駅員が介助講習を受講し、高齢者や身体の不自由なお客様にも
                  安心してご利用いただける体制を整えています。
                </p>
              </div>

              <div className="relative h-64 w-full md:w-1/2">
                <Image
                  src="/images/safety/safety_assist.jpg"
                  alt="駅員の介助研修の様子"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer siteColor={siteConfig.color.siteColor} />
    </div>
  );
}
