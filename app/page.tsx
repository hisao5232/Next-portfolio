import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      {/* ヒーローセクション */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* 背景画像（ここに好きな画像を配置してください。パスは public/hero.jpg 等） */}
        {/* 画像をまだ用意していない場合は、この div がグレーのプレースホルダーになります */}
        <div className="absolute inset-0 z-0 opacity-60">
          {/* 画像がある場合は以下をコメントアウト解除して使用してください */}
          <Image 
            src="/hero.webp" 
            alt="Hero Image" 
            fill 
            className="object-cover"
            priority
          /> 
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <span className="text-slate-500 text-sm">Recommended Size: 1920x1080 (Hero Image Placeholder)</span>
          </div>
        </div>

        {/* ヒーローコンテンツ */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-md">
            Connecting <span className="text-amber-500">Repair</span> and <span className="text-amber-500">Code</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200 drop-shadow-sm">
            重機修理エンジニアからプログラミングの世界へ。<br />
            現場の課題を技術で解決する、新しいポートフォリオサイト。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-900 shadow-xl hover:bg-amber-400 transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* 特徴 1 */}
            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-slate-50 transition-all hover:bg-slate-100">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Hard Skill</h3>
              <p className="mt-2 text-amber-600 font-bold text-sm italic">Repair Engineer Specialist</p>
              <p className="mt-2 text-base text-slate-700 leading-relaxed">
                建設機械の修理で培った、物理的・論理的な問題解決能力。現場での実戦経験をエンジニアリングに。
              </p>
            </div>

            {/* 特徴 2 */}
            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-slate-50 transition-all hover:bg-slate-100">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">IT Strategy</h3>
              <p className="mt-2 text-amber-600 font-bold text-sm italic">Next.js & Python Integration</p>
              <p className="mt-2 text-base text-slate-700 leading-relaxed">
                Pythonによる業務自動化から、Next.jsを用いたモダンなWebアプリ開発まで、多角的な解決策を提示。
              </p>
            </div>

            {/* 特徴 3 */}
            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-slate-50 transition-all hover:bg-slate-100">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Lifestyle</h3>
              <p className="mt-2 text-amber-600 font-bold text-sm italic">Football & Fitness</p>
              <p className="mt-2 text-base text-slate-700 leading-relaxed">
                青山学院理工学部卒の理論的思考と、サッカー・筋トレで磨いた持久力。攻守にわたる粘り強さ。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
