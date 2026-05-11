import { getArticleBySlug, getAllSlugs, getAdjacentArticles } from "@/lib/articles";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import remarkGfm from 'remark-gfm';
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ArticleImage from "@/components/ArticleImage";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.gerd-guide.com/articles/${slug}`,
    },
  };
}

const components = {
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children?: React.ReactNode }) => {
    const isExternal = href?.startsWith('http');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href || ''} {...props}>
        {children}
      </Link>
    );
  },
};

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const { newerArticle, olderArticle } = getAdjacentArticles(slug);

  return (



    <div className="min-h-screen bg-[#d9cdb9] px-4 py-8">
    <ScrollToTop />



      <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 pt-6 pb-12 md:px-8 md:pt-12">

          {/* パンくずリスト */}
          <div className="hidden md:block mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <span>{article.title}</span>
          </div>

          {/* アイキャッチ画像 */}
          {article.image && (
            <div className="md:mx-0 mb-6">
              <ArticleImage src={article.image} alt={article.title} />
            </div>
          )}

          {/* カテゴリ */}
          <div className="hidden md:block mb-4">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              {article.category}
            </span>
          </div>

          {/* タイトル */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          {/* 日付 */}
          <div className="mb-8 text-sm text-gray-500">
            <time>{article.date}</time>
          </div>

          {/* 記事本文 */}
          <div className="prose max-w-none">
            <MDXRemote 
              source={article.content} 
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          {/* ナビゲーションリンク */}
          <div className="mt-12 flex flex-col gap-3">
            <div className="flex justify-between gap-3">
              <div className="flex-1">
                {olderArticle ? (
                <a  
                    href={"/articles/" + olderArticle.slug}
                    className="block px-4 py-3 text-gray-800 rounded-lg hover:bg-amber-100 transition-colors"
                  >
                    <div className="text-base text-gray-500 mb-1">◀ 前の記事</div>
                    <div className="text-base font-medium leading-snug">{olderArticle.title}</div>
                  </a>
                ) : <div className="flex-1" />}
              </div>

              <div className="flex-1 text-right">
                {newerArticle ? (
                <a  
                    href={"/articles/" + newerArticle.slug}
                    className="block px-4 py-3 text-gray-800 rounded-lg hover:bg-amber-100 transition-colors"
                  >
                    <div className="text-base text-gray-500 mb-1">次の記事 ▶</div>
                    <div className="text-base font-medium leading-snug">{newerArticle.title}</div>
                  </a>
                ) : <div className="flex-1" />}
              </div>
            </div>

            <div className="flex justify-center">
              <ScrollToTopButton />
            </div>
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