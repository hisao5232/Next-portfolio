import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go into-PG-World",
  description: "エンジニアのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${geist.className} bg-white text-slate-900 antialiased`}>
        {/* ヘッダー：濃いグレー背景 (bg-slate-900) */}
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900 text-white shadow-lg">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
            <div className="text-xl font-bold tracking-tighter">
              Go into-<span className="text-amber-500">PG</span>-World
            </div>
            <nav className="hidden space-x-8 text-sm font-medium md:flex">
              {/* ホバー時にオレンジ (hover:text-amber-500) */}
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">Home</a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">About</a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">Projects</a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 text-center">
            <p className="text-sm text-slate-500 font-mono">go-pro-world.net since 2024</p>
            <p className="mt-2 text-xs text-slate-400">© {new Date().getFullYear()} Go into-PG-World</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
