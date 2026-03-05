import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  return (
    <div className="min-h-screen bg-[#d9cdb9] py-8">
      <article className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">

        <div className="px-8 py-12">

          {/* パンくずリスト */}
          <div className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <span>{article.title}</span>
          </div>

          {/* カテゴリ */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              {article.category}
            </span>
          </div>

          {/* タイトル */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          {/* 日付 */}
          <div className="mb-8 text-sm text-gray-500">
            <time>{article.date}</time>
          </div>

          {/* 記事本文 */}
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={article.content} />
          </div>
        </div>
      </article>

      {/* 免責事項(白枠の外) */}
      <div className="max-w-3xl mx-auto mt-6 px-4">
        <p className="text-xs text-gray-600 text-center">
          この記事の内容は参考情報としてお読みください。
          <Link href="/about#disclaimer" className="text-blue-600 hover:underline mx-1">
            免責事項
          </Link>
          をお読みの上、症状や治療については、必ず医師にご相談ください。
        </p>
      </div>
    </div>
  );
}