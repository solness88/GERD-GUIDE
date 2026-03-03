import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ヒーローセクション */}
      <section className="border-b border-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            逆流性食道炎(GERD)ガイド
          </h1>
          <p className="text-gray-600">
            逆流性食道炎・バレット食道について、当事者が調べた情報と体験をまとめています。
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        {/* カテゴリフィルター */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
              すべて
            </button>
            <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
              📚 基礎知識
            </button>
            <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
              🍽️ 生活・食事
            </button>
            <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
              🔬 検査・診断
            </button>
            <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
              ✍️ 体験談
            </button>
          </div>
        </section>

        {/* 記事一覧 */}
        <section>
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="border-b border-gray-100 pb-8 last:border-b-0">
                <Link href={`/articles/${article.slug}`} className="group">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time>{article.date}</time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
          <p className="mb-2">
            このサイトの情報は医師の診断・治療の代わりになるものではありません。
          </p>
          <p>© 2025 GERDガイド by GERD管理人</p>
        </div>
      </footer>
    </div>
  );
}