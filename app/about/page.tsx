export default function About() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* アニメーション注入 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
      `}} />

      {/* ヘッダーセクション */}
      <section className="bg-slate-950 py-24 text-center">
        <h1 className="reveal text-4xl md:text-6xl font-black text-white tracking-tighter">
          ABOUT <span className="text-amber-500">ME</span>
        </h1>
        <p className="reveal delay-1 mt-4 text-slate-400 text-lg">修理エンジニアから、コードの世界へ</p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* 左側：経歴テキスト */}
          <div className="space-y-12">
            <div className="reveal delay-1">
              <h2 className="text-2xl font-bold border-b-2 border-amber-500 pb-2 inline-block">The Story</h2>
              <p className="mt-6 leading-relaxed text-slate-700">
                1983年生まれ。現在は建設機械の修理エンジニアとして、重機が再び力強く動くための論理的な思考と技術を駆使しています。
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                青山学院大学理工学部で化学を学んだ背景を持ち、数学・物理・化学、そしてITといった「論理で紐解ける世界」に強い情熱を持っています。
              </p>
            </div>

            <div className="reveal delay-2">
              <h2 className="text-2xl font-bold border-b-2 border-amber-500 pb-2 inline-block">From Gears to Code</h2>
              <p className="mt-6 leading-relaxed text-slate-700">
                複雑な機械の故障原因を突き止めるプロセスは、プログラミングにおけるデバッグと同じです。
                Pythonによる業務自動化をきっかけに、より広大なソフトウェア開発の世界に惹かれ、日々学習を続けています。
              </p>
            </div>
          </div>

          {/* 右側：スキル・趣味カード */}
          <div className="space-y-8">
            <div className="reveal delay-3 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-black text-amber-600 uppercase tracking-widest text-sm italic">Physical & Discipline</h3>
              <p className="mt-4 font-bold text-xl text-slate-900">Soccer & Fitness</p>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                小学生から続くサッカーへの情熱。サイドハーフとして走り抜くための筋トレを欠かしません。
                177cm/63kg、体脂肪10%の絞り込まれた身体は、粘り強い開発作業の基盤です。
              </p>
            </div>

            <div className="reveal delay-3 bg-slate-900 p-8 rounded-2xl text-white">
              <h3 className="font-black text-amber-400 uppercase tracking-widest text-sm italic">Tech Stack</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="font-bold">Python</span>
                  <span className="text-slate-400 text-xs tracking-widest uppercase italic">Logic & Automation</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="font-bold">Next.js / React / Tailwind v4</span>
                  <span className="text-slate-400 text-xs tracking-widest uppercase italic">Modern Web App</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="font-bold">Ubuntu / VPS</span>
                  <span className="text-slate-400 text-xs tracking-widest uppercase italic">Infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* タイムライン風ステータス */}
        <div className="reveal delay-3 mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-slate-50 p-12 rounded-3xl">
          <div>
            <div className="text-3xl font-black text-amber-500">1983</div>
            <div className="text-xs text-slate-500 uppercase font-bold mt-2">Birth</div>
          </div>
          <div>
            <div className="text-3xl font-black text-amber-500">AGU</div>
            <div className="text-xs text-slate-500 uppercase font-bold mt-2">Chemistry BSc</div>
          </div>
          <div>
            <div className="text-3xl font-black text-amber-500">10%</div>
            <div className="text-xs text-slate-500 uppercase font-bold mt-2">Body Fat</div>
          </div>
          <div>
            <div className="text-3xl font-black text-amber-500">∞</div>
            <div className="text-xs text-slate-500 uppercase font-bold mt-2">Passion</div>
          </div>
        </div>
      </div>
    </div>
  );
}