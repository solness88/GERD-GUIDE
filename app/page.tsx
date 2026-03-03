import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-[#d9cdb9] flex flex-col">
      {/* ヒーローセクション */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            逆流性食道炎(GERD)ガイド
          </h1>
          <p className="text-gray-600 leading-relaxed">
            逆流性食道炎・バレット食道について、当事者が調べた情報と体験をまとめています。
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="max-w-3xl mx-auto px-4 pb-16 flex-1">
        {/* カテゴリフィルター */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              すべて
            </button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              📚 基礎知識
            </button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              🍽️ 生活・食事
            </button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              🔬 検査・診断
            </button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              ✍️ 体験談
            </button>
          </div>
        </section>

        {/* 記事一覧 */}
        <section>
          <div className="space-y-8">
            {articles.map((article) => (
              <article 
                key={article.slug} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <Link href={`/articles/${article.slug}`}>
                  <div className="p-6">
                    {/* 日付 */}
                    <div className="text-sm text-gray-500 mb-3">
                      {article.date}
                    </div>
                    
                    {/* タイトル */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>
                    
                    {/* 抜粋 */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    {/* カテゴリ */}
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="py-8 px-4 mt-16">
        <div className="max-w-3xl mx-auto text-center text-gray-600 text-sm">
          <p className="mb-2">
            このサイトの情報は医師の診断・治療の代わりになるものではありません。
          </p>
          <p>© 2025 GERDガイド by GERD管理人</p>
        </div>
      </footer>
    </div>
  );
}