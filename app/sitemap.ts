import { getAllArticles } from '@/lib/articles';

export default function sitemap() {
  const articles = getAllArticles();
  
  const articleUrls = articles.map((article) => ({
    url: `https://gerd-guide.com/articles/${article.slug}`,
    lastModified: article.date,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://gerd-guide.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://gerd-guide.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...articleUrls,
  ];
}
