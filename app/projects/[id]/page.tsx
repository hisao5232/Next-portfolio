import React from 'react';

const projects = [
  {
    id: 1,
    title: "Repair-Timetable : 出張修理予約 故障原因分析システム",
    fullDescription: "現役の建設機械修理エンジニアとしての知見を活かし、現場のDXを推進するために開発したフルスタックWebアプリケーションです。現場特有の『状況把握の難しさ』をITで解決します。",
    tech: ["Python (FastAPI)", "JavaScript", "PostgreSQL", "Docker", "Cloudflare Pages", "Tailwind CSS v4"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      {url: "/images/repair-sub-1.webp", caption: "予約情報入力画面"},
      {url: "/images/repair-sub-2.webp", caption: "カレンダービューでの予約管理"},
      {url: "/images/repair-sub-3.webp", caption: "故障原因分析のダッシュボード"},
    ],
    features: [
      "月間・週間カレンダーによる直感的な修理スケジュール管理",
      "故障原因カテゴリーに基づく動的な統計分析",
      "自社リース機の拠点別管理および修理完了報告機能",
      "Cloudflare + VPS によるセキュアかつ高速な分散インフラ構成",
      "レスポンシブ設計による現場スマホからのリアルタイム入力"
    ],
    // バッククォートを使用して改行を保持
    background: `現役の修理エンジニアとして、現場の課題解決を目指して開発をスタートしました。

■ 事務作業の軽減とヒアリング改善
電話等による故障状況の確認をデジタル化し、伝達ロスを削減。

■ 故障履歴のデジタル管理
過去のデータを一元管理し、迅速な判断と現場間でのナレッジ共有を実現。

■ 故障予防（予防保全）の実現
蓄積データを分析し、故障を未然に防ぐ提案を行うことで機械の稼働率を向上。`
  },
  {
    id: 2,
    title: "Market Radar AI v1.2",
    fullDescription: "Llama 3.3 (Groq API) を活用し、膨大なプレスリリースから市場に影響を与える重要ニュースをリアルタイムで抽出・分析するシステムです。自然な日本語での分析と、証券データとの正確な紐付けを両立させました。",
    tech: ["Next.js", "Python", "PostgreSQL", "Groq AI", "Docker"],
    // ご指定いただいたUnsplashの株価チャート画像
    image: "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      {url: "https://images.unsplash.com/photo-1581092160204-cdcbce12e181?auto=format&fit=crop&q=80&w=800", caption: "AI分析ログ"},
      {url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800", caption: "ダッシュボード表示"},
    ],
    features: [
      "Llama 3.3 による高精度なニュース分析と要約",
      "独自の銘柄照合アルゴリズムによるティッカー自動付与",
      "Docker Compose によるフルスタックなインフラ構成",
      "Traefik を利用したリバースプロキシとSSL自動更新"
    ],
    // 3文にまとめた背景
    background: `趣味で行っている株価分析の一環として、投資銘柄の選定作業をAIで効率化することを目指し開発しました。
膨大な経済ニュースをリアルタイムに集約・要約することで、情報の取捨選択にかかる時間を大幅に短縮しています。
AIによる客観的な分析データを活用し、時短かつ精度の高い投資意思決定を行える体制を構築しました。`
  },
  {
    id: 3,
    title: "Heavy Machinery Rental System",
    fullDescription: "建設現場のニーズと重機の在庫を最適にマッチングさせる予約管理システムです...",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Cloudflare"],
    image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      {url: "https://images.unsplash.com/photo-1581092160204-cdcbce12e181?auto=format&fit=crop&q=80&w=800", caption: "予約フォーム"},
    ],
    features: [
      "現場住所・回送依頼を含む高度な予約フォーム",
      "管理者用ダンプ・バックホー等のカテゴリー別管理",
      "JWT認証によるセキュアなログイン機能",
      "Dockerによる一貫した開発・デプロイ環境"
    ],
    background: "修理エンジニアとして現場に携わる中で、重機手配の非効率さを痛感し開発。"
  }
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
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
    <div className="bg-slate-50 min-h-screen pb-20 text-slate-900 font-sans">
      {/* ヒーロー画像セクション */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden bg-slate-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl">
            <span className="text-amber-500 font-black tracking-widest uppercase text-sm mb-4 block">
              Project Detail
            </span>
            <h1 className="flex flex-col items-center">
              <span className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                {project.title.split(' : ')[0]}
              </span>
              {project.title.includes(' : ') && (
                <span className="mt-4 text-lg md:text-2xl font-bold text-slate-300 tracking-tight">
                  {project.title.split(' : ')[1]}
                </span>
              )}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100">
          
          <div className="flex flex-wrap gap-2 mb-12">
            {project.tech.map((t) => (
              <span key={t} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase border-l-4 border-amber-500 pl-4 mb-4">
                Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </section>

            {/* ギャラリー */}
            {project.subImages && project.subImages.length > 0 && (
              <section>
                <h2 className="text-xl font-black text-slate-900 uppercase border-l-4 border-amber-500 pl-4 mb-8">
                  Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.subImages.map((imgObj, index) => (
                    <div key={index} className="group space-y-4">
                      <div className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-video shadow-md border border-slate-100">
                        <img
                          src={imgObj.url}
                          alt={imgObj.caption}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <p className="text-sm font-bold text-slate-500 text-center tracking-tight">
                        {imgObj.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 背景セクション：ここを修正 */}
            <section className="bg-slate-50 p-8 md:p-10 rounded-4xl border border-slate-100">
              <h2 className="text-xl font-black text-slate-900 uppercase mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
                Background
              </h2>
              {/* whitespace-pre-line でデータの改行を表示 */}
              <div className="text-slate-700 leading-relaxed font-medium whitespace-pre-line">
                {project.background}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900 uppercase border-l-4 border-amber-500 pl-4 mb-6">
                Main Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                    <span className="font-medium text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row gap-8 justify-between items-center">
            <a href="/projects" className="group text-slate-400 hover:text-slate-900 font-bold uppercase tracking-widest text-xs no-underline transition-colors flex items-center gap-2">
              <span className="transition-transform group-hover:-translate-x-1">←</span> Back to All Projects
            </a>
            <a href="https://github.com/hisao5232" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto text-center bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-amber-500 hover:scale-105 transition-all no-underline shadow-xl shadow-slate-200">
              View Code on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
