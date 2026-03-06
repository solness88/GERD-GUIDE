import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  content: string;
};

// すべての記事を取得
export function getAllArticles(): Article[] {
  // ディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(articlesDirectory)) {
    console.error('Articles directory does not exist:', articlesDirectory);
    return [];
  }

  // ファイル名一覧を取得
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // ファイル名からslugを取得
      const slug = fileName.replace(/\.mdx$/, '');
      
      // ファイル内容を読み込み
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // メタデータとコンテンツを分離
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title || 'タイトルなし',
        excerpt: data.excerpt || '',
        date: data.date || '',
        category: data.category || 'その他',
        image: data.image,
        content,
      };
    });
  
  // 日付順にソート(新しい順)
  return articles.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// 特定の記事を取得
export function getArticleBySlug(slug: string): Article {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Article not found: ${slug}`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || 'タイトルなし',
    excerpt: data.excerpt || '',
    date: data.date || '',
    category: data.category || 'その他',
    image: data.image,
    content,
  };
}

// すべてのslugを取得(静的生成用)
export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}