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
    title: "Market Radar AI v1.2",
    fullDescription: "Llama 3.3 (Groq API) を活用し、膨大なプレスリリースから日本株市場に影響を与える重要ニュースをリアルタイムで抽出・分析するシステムです。単なる要約に留まらず、ニュースに関連する上場企業を特定し、銘柄コード（ティッカー）を自動付与してデータベース化します。自然な日本語での分析と、証券データとの正確な紐付けを両立させました。",
    tech: ["Next.js", "Python", "PostgreSQL", "Groq AI", "Docker"],
    image: "/images/market-radar-sh.webp",
    features: [
      "Llama 3.3 による高精度なニュース分析と要約",
      "独自の銘柄照合アルゴリズムによるティッカー自動付与",
      "Docker Compose によるフルスタックなインフラ構成",
      "Traefik を利用したリバースプロキシとSSL自動更新"
    ],
    background: "副業でのプログラミング学習と、自身の投資活動を効率化するために開発。情報の取捨選択という課題をAIの力で解決することを目指しました。"
  },
  {
  id: 3,
  title: "Heavy Machinery Rental System",
  fullDescription: "建設現場のニーズと重機の在庫を最適にマッチングさせる予約管理システムです。現場住所の入力や回送（運搬）依頼の有無など、建設業界特有の商習慣をフォームに落とし込み、電話やFAXに頼っていた予約フローをデジタル化。バックエンドにFastAPI、フロントエンドにNext.jsを採用し、高速でストレスのない操作感を実現しました。",
  tech: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Cloudflare"],
  image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=1200",
  features: [
    "現場住所・回送依頼を含む高度な予約フォーム",
    "管理者用ダンプ・バックホー等のカテゴリー別管理",
    "JWT認証によるセキュアなログイン機能",
    "Dockerによる一貫した開発・デプロイ環境"
  ],
  background: "修理エンジニアとして現場に携わる中で、重機の空き状況確認や手配の非効率さを痛感し、自ら解決するために開発をスタートしました。"
}
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
