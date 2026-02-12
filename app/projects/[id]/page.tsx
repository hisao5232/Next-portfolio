import React from 'react';

// プロジェクトのデータ
const projects = [
  {
    id: 1,
    title: "Construction Tech Automation",
    fullDescription: "Pythonを用いた重機メンテナンスデータの自動解析ツールです。現場で手書きやExcel入力されていた報告書データを解析し、不具合の傾向を可視化。報告書作成時間を大幅に短縮し、データに基づいた予防保全を可能にしました。",
    tech: ["Python", "Pandas", "Openpyxl"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
    features: ["Excelデータの自動統合", "不具合箇所の自動ラベリング", "PDFレポート出力機能"],
    background: "修理エンジニアとしての実体験から、事務作業の多さが現場の負担になっていると感じ開発しました。"
  },
  {
    id: 2,
    title: "Portfolio Website v1",
    fullDescription: "Next.jsとTailwind CSS v4を使用したモダンなポートフォリオです。Cloudflare Pagesの自動デプロイを利用し、パフォーマンスと保守性を両立させています。エンジニアとしてのスキルと、修理現場でのアイデンティティを融合させたデザインを目指しました。",
    tech: ["Next.js", "React", "Tailwind CSS v4", "Lucide React"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    features: ["レスポンシブデザイン", "Tailwind v4 による高速なビルド", "Cloudflare Pages への自動デプロイ"],
    background: "自分自身の活動を一覧化し、エンジニアとしての『名刺』代わりになる場所を作るために制作しました。"
  },
  {
    id: 3,
    title: "Inventory Logic System",
    fullDescription: "修理部品の在庫管理を論理的に最適化するアルゴリズムです。過去の修理実績データから、よく使われる部品とそうでない部品を分類。欠品リスクを最小限に抑えつつ、過剰在庫によるコストを削減します。",
    tech: ["Python", "SQLite", "Ubuntu"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    features: ["夢予測アルゴリズム", "SQLiteによる高速な検索", "CLIベースの在庫管理インターフェース"],
    background: "現場で必要な部品が足りず修理が止まるストレスを解消するために開発しました。"
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

/**
 * Next.js 15 の仕様に合わせ、params を Promise として処理します
 */
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // ここで await して値を取り出すのがポイントです
  const { id } = await params;
  
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Project not found</h2>
          <a href="/projects" className="text-amber-500 mt-4 inline-block font-bold">Back to Projects</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20 text-slate-900">
      {/* ヒーロー画像セクション */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <span className="text-amber-500 font-black tracking-widest uppercase text-sm mb-4 block">Project Detail</span>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200">
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase border-l-4 border-amber-500 pl-4 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{project.fullDescription}</p>
            </section>

            <section className="bg-slate-50 p-8 rounded-3xl">
              <h2 className="text-xl font-black text-slate-900 uppercase mb-4">Background</h2>
              <p className="text-slate-600 leading-relaxed italic">{project.background}</p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase mb-4">Main Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-center">
            <a href="/projects" className="text-slate-400 hover:text-slate-900 font-bold uppercase tracking-widest text-sm no-underline transition-colors">
              ← Back to All Projects
            </a>
            <a
              href="https://github.com/hisao5232"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-amber-500 hover:scale-105 transition-all no-underline shadow-xl shadow-slate-200"
            >
              View Code on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
