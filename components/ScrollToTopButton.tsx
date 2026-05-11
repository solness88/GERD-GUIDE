'use client';

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="inline-block px-6 py-3 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
    >
      ページ上部へ
    </button>
  );
}