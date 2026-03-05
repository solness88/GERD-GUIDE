import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-[#d9cdb9] flex flex-col">
      {/* メインコンテンツ */}
      <main className="flex-1 max-w-3xl mx-auto px-4 py-8 w-full">
        {/* カテゴリフィルター */}
        <section className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="px-3 py-1.5 bg-white text-gray-700 rounded-full text-xs font-medium shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              すべて
            </button>
            <button className="px-3 py-1.5 bg-white text-gray-600 rounded-full text-xs shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              📚 基礎知識
            </button>
            <button className="px-3 py-1.5 bg-white text-gray-600 rounded-full text-xs shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              🍽️ 生活・食事
            </button>
            <button className="px-3 py-1.5 bg-white text-gray-600 rounded-full text-xs shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              🔬 検査・診断
            </button>
            <button className="px-3 py-1.5 bg-white text-gray-600 rounded-full text-xs shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              ✍️ 体験談
            </button>
          </div>
        </section>

        {/* 記事一覧 */}
        <section>
          <div className="space-y-4">
            {articles.map((article) => (
              <article 
                key={article.slug} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/articles/${article.slug}`}>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                      <time>{article.date}</time>
                      <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                        {article.category}
                      </span>
                    </div>
                    
                    <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {article.excerpt}
                    </p>
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
          <p>© 2026 逆流性食道炎ガイド by GERD管理人</p>
        </div>
      </footer>
    </div>
  );
}