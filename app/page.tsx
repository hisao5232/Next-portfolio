export default function Home() {
  return (
    <div className="relative">
      {/* 確実にアニメーションを動かすためのCSS注入 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeUpIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-direct {
          animation: fadeUpIn 0.8s ease-out forwards !important;
        }
        .delay-1 { animation-delay: 0.2s !important; }
        .delay-2 { animation-delay: 0.4s !important; }
      `}} />

      {/* ヒーローセクション */}
      <section className="relative w-full h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* 背景画像エリア - 明るさを調整 */}
        <div className="absolute inset-0 z-0 opacity-70"> {/* opacityを50から70に上げて画像を明るく */}
          <img 
            src="/hero.webp" 
            alt="Hero Image" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* グラデーションを薄くして画像のディテールを出しつつ、文字の視認性も維持 */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          {/* タイトル: styleで初期状態を透明にし、CSSクラスで動かす */}
          <h1 
            className="animate-direct text-5xl font-black tracking-tighter text-white sm:text-8xl mb-6"
            style={{ opacity: 0 }}
          >
            Connecting <br className="sm:hidden" />
            <span className="text-amber-500 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">Repair</span>
            {" "}and{" "}
            <span className="text-amber-500 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">Code</span>
          </h1>
          
          {/* サブテキスト */}
          <p 
            className="animate-direct delay-1 mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-8 text-slate-100 font-bold drop-shadow-md"
            style={{ opacity: 0 }}
          >
            建設機械エンジニアからプログラミングの世界へ。<br />
            現場の課題を技術で解決する、ポートフォリオサイト。
          </p>

          {/* ボタン */}
          <div 
            className="animate-direct delay-2 mt-12 flex items-center justify-center gap-x-6"
            style={{ opacity: 0 }}
          >
            <a
              href="/projects"
              className="group relative rounded-full bg-amber-500 px-12 py-4 text-sm font-bold text-slate-950 shadow-2xl hover:bg-amber-400 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-widest">View Projects</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700"></div>
            </a>
          </div>
        </div>

        {/* 下部への繋ぎのグラデーション */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-white py-32 relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="group border-l-4 border-amber-500 pl-8 py-8 bg-slate-50 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-1 text-slate-900">
              <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-amber-600 transition-colors">Hard Skill</h3>
              <p className="mt-2 text-amber-600 font-bold text-xs tracking-widest uppercase italic">Repair Specialist</p>
              <p className="mt-6 text-base text-slate-700 leading-relaxed font-medium">
                建設機械の修理で培った、物理的・論理的な問題解決能力。現場での実戦経験をエンジニアリングの土台に。
              </p>
            </div>

            <div className="group border-l-4 border-amber-500 pl-8 py-8 bg-slate-50 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-1 text-slate-900">
              <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-amber-600 transition-colors">IT Strategy</h3>
              <p className="mt-2 text-amber-600 font-bold text-xs tracking-widest uppercase italic">Logic & Code</p>
              <p className="mt-6 text-base text-slate-700 leading-relaxed font-medium">
                Pythonによる業務自動化から、Javascript、Next.jsを用いたモダンなWebアプリ開発まで、現場視点の解決策を提示。
              </p>
            </div>

            <div className="group border-l-4 border-amber-500 pl-8 py-8 bg-slate-50 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-1 text-slate-900">
              <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-amber-600 transition-colors">Lifestyle</h3>
              <p className="mt-2 text-amber-600 font-bold text-xs tracking-widest uppercase italic">Football & Fitness</p>
              <p className="mt-6 text-base text-slate-700 leading-relaxed font-medium">
                理工学部卒の論理的思考と、趣味のサッカー、筋トレで鍛えた持久力。困難なバグや課題にも粘り強く立ち向かいます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
