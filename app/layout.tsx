import type { Metadata } from "next";

// エラー回避のため、next/font/google のインポートを削除し、
// システムフォントを使用するように設定します。
// また、インポートパスの解決エラーを防ぐため globals.css の参照を調整します。
import "./globals.css";

export const metadata: Metadata = {
  title: "Go-out-into-PG-World",
  description: "重機修理エンジニア × プログラミング。現場の課題を技術で解決するポートフォリオ。",
};

/**
 * 全ページ共通のレイアウト。
 * ヘッダー（ナビゲーション）をここに配置することで、
 * どのページに移動してもメニューが表示されるようになります。
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* フォントをシステムフォントのスタックに設定 */}
      <body style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
        {/* ナビゲーションバー */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* ロゴ / ホームリンク - Go-into-PG-world に設定 */}
            <a href="/" className="group flex items-center gap-2 no-underline text-inherit">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center font-black text-slate-950 group-hover:rotate-12 transition-transform">
                G
              </div>
              <span className="text-white font-black tracking-tighter text-xl group-hover:text-amber-500 transition-colors uppercase">
                Go-out-into-<span className="text-amber-500 group-hover:text-white transition-colors">PG</span>-world
              </span>
            </a>

            {/* ナビゲーションリンク */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/about" className="text-sm font-bold text-slate-300 hover:text-amber-500 transition-colors uppercase tracking-widest">
                About
              </a>
              <a href="/projects" className="text-sm font-bold text-slate-300 hover:text-amber-500 transition-colors uppercase tracking-widest">
                Projects
              </a>
              <a href="/contact" className="text-sm font-bold text-slate-300 hover:text-amber-500 transition-colors uppercase tracking-widest">
                Contact
              </a>
              
              {/* GitHub アイコン */}
              <a 
                href="https://github.com/hisao5232" 
                target="_blank" 
                className="ml-4 p-2 bg-white/5 rounded-full text-white hover:bg-amber-500 hover:text-slate-950 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* モバイル用メニュー（簡易版） */}
            <div className="md:hidden flex gap-4">
               <a href="/about" className="text-xs font-black text-amber-500 uppercase tracking-tighter">About</a>
               <a href="/projects" className="text-xs font-black text-amber-500 uppercase tracking-tighter">Works</a>
               <a href="/contact" className="text-xs font-black text-amber-500 uppercase tracking-tighter">Contact</a>
            </div>
          </nav>
        </header>

        {/* ページコンテンツの表示エリア */}
        <main className="pt-20">
          {children}
        </main>

        {/* 共通フッター */}
        <footer className="bg-slate-950 py-12 text-center border-t border-white/5">
          <p className="text-slate-500 text-xs font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} hisao5232. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
