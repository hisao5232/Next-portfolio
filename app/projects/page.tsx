export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Construction Tech Automation",
      description: "Pythonを用いた重機メンテナンスデータの自動解析ツール。現場の報告書作成時間を50%削減。",
      tech: ["Python", "Pandas", "Openpyxl"],
      github: "https://github.com/hisao5232",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800", // 重機の整備イメージ
    },
    {
      id: 2,
      title: "Portfolio Website v1",
      description: "Next.jsとTailwind CSS v4を使用したモダンなポートフォリオ。Cloudflare Pagesで公開。",
      tech: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/hisao5232/my-app",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // Web開発イメージ
    },
    {
      id: 3,
      title: "Inventory Logic System",
      description: "修理部品の在庫管理を論理的に最適化するアルゴリズム。欠品リスクの最小化を実現。",
      tech: ["Python", "SQLite", "Ubuntu"],
      github: "https://github.com/hisao5232",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", // 在庫管理イメージ
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* アニメーション注入 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
      `}} />

      {/* ヘッダー */}
      <section className="bg-slate-950 py-24 text-center">
        <h1 className="reveal text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
          My <span className="text-amber-500">Projects</span>
        </h1>
        <p className="reveal delay-1 mt-4 text-slate-400 text-lg">技術と現場の経験を形にした制作実績</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`reveal bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 delay-${index + 1}`}
            >
              {/* スクリーンショットエリア */}
              <div className="relative h-52 bg-slate-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/80 backdrop-blur-md text-amber-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    #{String(project.id).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* コンテンツエリア */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter border border-slate-200 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 h-12 overflow-hidden">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <a 
                    href={project.github} 
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub Code
                  </a>
                  <button className="text-amber-500 font-black text-[10px] uppercase tracking-tighter">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHubへの誘導セクション */}
        <div className="reveal delay-3 mt-24 bg-slate-900 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Want to see more?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            最新のコードや現在進行中のプロジェクトは、GitHubリポジトリにて公開しています。
          </p>
          <a 
            href="https://github.com/hisao5232"
            target="_blank"
            className="inline-block bg-amber-500 text-slate-950 px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
