import Link from "next/link";

export const metadata = {
  title: "このサイトについて | 逆流性食道炎ガイド",
  description: "逆流性食道炎ガイドの運営方針と管理人について",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#d9cdb9] flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
          {/* パンくずリスト */}
          <div className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <span>このサイトについて</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            このサイトについて
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                逆流性食道炎ガイドとは
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                「逆流性食道炎ガイド」は、逆流性食道炎・バレット食道に関する情報を発信するブログサイトです。
              </p>
              <p className="text-gray-700 leading-relaxed">
                逆流性食道炎やバレット食道と診断されたとき、インターネットで調べても情報が断片的だったり、不安を煽るような内容だったりして、かえって混乱することがあります。このサイトでは、当事者の視点から、信頼できる情報を整理し、同じ不安や疑問を抱える方の参考になる情報を提供します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                管理人について
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>GERD管理人</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                逆流性食道炎とバレット食道の診断を受け、経過観察中の当事者です。医師ではありませんが、自分自身が徹底的に調べた情報と実際の体験をもとに、このサイトを運営しています。
              </p>
              <p className="text-gray-700 leading-relaxed">
                医学的な情報は信頼できる文献やガイドラインを参照し、体験談は個人の経験として明確に区別して記載するよう心がけています。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                このサイトの目的
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>逆流性食道炎・バレット食道について、わかりやすく整理された情報を提供する</li>
                <li>医療サイトでは得られない「当事者の実感」を共有する</li>
                <li>不安を抱える方が、安心して情報を整理できる場所を作る</li>
                <li>過度に不安を煽らず、正確で冷静な情報発信を心がける</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                免責事項
              </h2>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>重要なお知らせ</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>このサイトの情報は、医師の診断や治療の代わりになるものではありません</li>
                  <li>症状や治療については、必ず医師にご相談ください</li>
                  <li>体験談は個人の経験であり、すべての人に当てはまるわけではありません</li>
                  <li>医学的な情報は、信頼できる文献を参照していますが、最新の情報と異なる場合があります</li>
                  <li>サイトの情報を利用したことによる損害について、管理人は一切の責任を負いません</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                お問い合わせ
              </h2>
              <p className="text-gray-700 leading-relaxed">
                サイトに関するご意見・ご質問は、今後お問い合わせフォームを設置予定です。
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-500 text-center pt-8 border-t border-gray-200">
                最終更新日: 2025年2月
              </p>
            </section>
          </div>
        </article>
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