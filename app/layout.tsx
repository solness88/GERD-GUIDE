import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "GERDガイド | 逆流性食道炎・バレット食道の情報サイト",
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
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              GERDガイド
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                ホーム
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
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