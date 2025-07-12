export default function SafetyMeasures() {
  return (
    <main className="mx-auto max-w-3xl bg-gray-50 px-4 py-12">
      <h1 className="mb-12 text-center text-4xl font-bold">安全対策</h1>

      <section className="mb-10 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">ホームドア全駅設置</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          AI電鉄では、すべての駅にホームドアを設置し、お客様の安全を確保しています。
          ホーム上での転落事故を防ぎ、安心してご利用いただけます。
        </p>
        <img
          src="/platform-doors.jpg"
          alt="ホームドアの写真"
          className="h-auto w-full rounded-md"
        />
      </section>

      <section className="mb-10 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">AIロボットで駅構内巡回</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          最先端のAIロボットが駅構内を巡回し、トラブルの早期発見や
          お客様のサポートを行っています。いつでも安心して駅をご利用いただけます。
        </p>
        <img
          src="/ai-robot.jpg"
          alt="AIロボットの写真"
          className="h-auto w-full rounded-md"
        />
      </section>

      <section className="mb-10 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">全駅員の介助講習受講</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          すべての駅員が介助講習を受講し、高齢者や身体の不自由なお客様にも
          安心してご利用いただける体制を整えています。
        </p>
        <img
          src="/staff-training.jpg"
          alt="駅員の介助研修の様子"
          className="h-auto w-full rounded-md"
        />
      </section>
    </main>
  );
}
