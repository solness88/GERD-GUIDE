import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "逆流性食道炎ガイド | 当事者が語る症状・治療・生活の工夫",
  description: "逆流性食道炎・バレット食道について、当事者が調べた情報と体験をまとめた情報サイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans">
        {/* ヘッダー */}
        <header className="bg-white border-b border-gray-200">
          <nav className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-lg font-bold text-gray-800">
              逆流性食道炎ガイド
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                ホーム
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                このサイトについて
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}