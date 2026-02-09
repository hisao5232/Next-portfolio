export default function Contact() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* アニメーション注入 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
      `}} />

      {/* ヘッダーセクション */}
      <section className="bg-slate-950 py-20 text-center">
        <h1 className="reveal text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
          Contact <span className="text-amber-500">Me</span>
        </h1>
        <p className="reveal delay-1 mt-4 text-slate-400 text-lg">プロジェクトのご相談やお問い合わせはこちらから</p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 左側：連絡先情報 */}
          <div className="md:col-span-1 space-y-6">
            <div className="reveal delay-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xs font-black text-amber-600 uppercase tracking-widest italic">GitHub</h3>
              <p className="mt-2 font-bold text-slate-900">@hisao5232</p>
              <a 
                href="https://github.com/hisao5232" 
                target="_blank" 
                className="mt-4 inline-block text-sm text-slate-500 hover:text-amber-600 transition-colors"
              >
                View Profile →
              </a>
            </div>

            <div className="reveal delay-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xs font-black text-amber-600 uppercase tracking-widest italic">Location</h3>
              <p className="mt-2 font-bold text-slate-900">Japan</p>
              <p className="text-sm text-slate-500 mt-1">Remote / On-site</p>
            </div>

            <div className="reveal delay-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xs font-black text-amber-600 uppercase tracking-widest italic">Domain</h3>
              <p className="mt-2 font-bold text-slate-900 truncate">go-pro-world.net</p>
            </div>
          </div>

          {/* 右側：メッセージフォーム（UIのみ） */}
          <div className="md:col-span-2">
            <form className="reveal delay-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="お名前"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="メールアドレス"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="件名"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-slate-900 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* フッター的なメッセージ */}
        <div className="reveal delay-3 mt-20 text-center">
          <p className="text-slate-400 text-sm font-medium">
            修理の現場でも、コードのデバッグでも、<br />
            一つひとつの課題に誠実に向き合います。
          </p>
        </div>
      </div>
    </div>
  );
}
