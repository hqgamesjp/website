import type { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/common/Layout";
import { SeoParams } from "../libs/seo";

const PrivacyPolicy: NextPage = () => {
  const seo: SeoParams = {
    pageTitle: "PrivacyPolicy",
    pageDescription: "PrivacyPolicy",
    pagePath: "/privacy-policy",
  };

  return (
    <Layout seo={seo}>
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-2 md:mb-4">
              プライバシーポリシー
            </h2>
            <p className="text-gray-500 text-xl lg:text-2xl text-center mb-10 md:mb-20">
              （個人情報の取扱方針）
            </p>

            <h3 className="max-w-screen-md text-gray-800 text-lg lg:text-xl font-bold mb-1 md:mb-2 mx-auto">
              1. 個人情報の取得方法
            </h3>
            <p className="max-w-screen-md text-gray-500 text-xs md:text-sm mx-auto mb-4 md:mb-8">
              当社はボードゲーム制作やテストプレイ代行などの事業活動の中で、またお問い合わせフォームにおいて、氏名・住所・メールアドレスなどの個人を特定できる情報を取得することがございます。
            </p>

            <h3 className="max-w-screen-md text-gray-800 text-lg lg:text-xl font-bold mb-1 md:mb-2 mx-auto">
              2. 個人情報の利用目的
            </h3>
            <p className="max-w-screen-md text-gray-500 text-xs md:text-sm mx-auto mb-4 md:mb-8">
              当社は、法令により例外として取り扱うことが認められている場合を除き、ご提供いただいた個人情報を以下の目的で利用するものとします｡
              <ul className="mx-4 mb:mx-8 my-2 md:my-4">
                <li>・当社がお客様に対してサービスを提供するため</li>
                <li>・当社のウェブサイトなどのコンテンツを改良するため</li>
                <li>・当社が必要な場合にお客様に連絡をするため</li>
                <li>
                  ・当社の製品などに関する情報の提供や広告、キャンペーン等の案内のため
                </li>
              </ul>
            </p>

            <h3 className="max-w-screen-md text-gray-800 lg:text-xl font-bold mb-1 md:mb-2 mx-auto">
              3. 個人情報の保護・管理
            </h3>
            <p className="max-w-screen-md text-gray-500 text-xs md:text-sm mx-auto mb-4 md:mb-8">
              当社は､お客様の個人情報を保護すべく適切な管理を行います｡
              <br />
              当社は、法令により例外として取り扱うことが認められている場合を除き、あらかじめお客様の同意を得ることなく､個人情報を第三者に提供･開示いたしません｡
              <br />
              当社は､利用目的の達成に必要な範囲において個人情報を正確かつ最新の状態に保つとともに､個人情報への不正アクセス､個人情報の紛失､破壊､改ざんおよび漏えい等の予防に努めます｡
              <br />
              当社は、個人情報収集のためのサーバーの運用等を第三者に委託する場合は、委託した個人情報の安全管理が図られるように、委託した第三者に対する必要かつ適切な監督を行ないます。
            </p>

            <h3 className="max-w-screen-md text-gray-800 text-lg lg:text-xl font-bold mb-1 md:mb-2 mx-auto">
              4. 個人情報の第三者提供
            </h3>
            <p className="max-w-screen-md text-gray-500 text-xs md:text-sm text-xs md:text-sm mx-auto mb-4 md:mb-8">
              当社は、お客様の個人情報を以下の場合を除き第三者に開示しません。
              <ul className="mx-4 mb:mx-8 my-2 md:my-4">
                <li>・本人が事前に同意した場合。</li>
                <li>
                  ・裁判所の発する令状その他裁判所の決定、命令又は法令に基づき開示する場合。
                </li>
                <li>
                  ・検察・警察・監督官庁からの適法・適式な情報の照会があった場合。
                </li>
                <li>
                  ・合併、会社分割、営業譲渡その他の事由によって個人情報の提供を含む弊社の事業の承継が行われる場合。
                </li>
                <li>
                  ・その他個人情報の保護に関する法律において認められる場合。
                </li>
              </ul>
            </p>

            <h3 className="max-w-screen-md text-gray-800 text-lg lg:text-xl font-bold mb-1 md:mb-2 mx-auto">
              5. 免責事項
            </h3>
            <p className="max-w-screen-md text-gray-500 text-xs md:text-sm mx-auto mb-4 md:mb-8">
              当社ウェブサイトに掲載されている情報の正確性には万全を期していますが、利用者が当社ウェブサイトの情報を用いて行う一切の行為に関して、当社は一切の責任を負わないものとします。
              <br />
              また、当社は利用者が当社ウェブサイトを利用したことにより生じた、利用者の損害および利用者が第三者に与えた損害に関して、一切の責任を負わないものとします。
            </p>

            <h3 className="max-w-screen-md text-gray-800 text-lg lg:text-xl font-bold mb-1 md:mb-2 mx-auto">
              6. 著作権・肖像権
            </h3>
            <p className="max-w-screen-md text-gray-500 text-xs md:text-sm mx-auto mb-4 md:mb-8">
              当社ウェブサイト内の文章や画像、すべてのコンテンツは著作権・肖像権等により保護されています。無断での使用や転用は禁止されています。
            </p>

            <h3 className="max-w-screen-md text-gray-800 text-lg lg:text-xl font-bold mb-1 md:mb-2 mx-auto">
              7. お問い合わせ
            </h3>
            <p className="max-w-screen-md text-gray-500 text-xs md:text-sm mx-auto mb-4 md:mb-8">
              当社の個人情報の取り扱いに関するお問い合わせは､上記お問い合わせフォームまでお願いいたします｡
            </p>

            <div className="flex justify-center gap-2.5 mt-28 mx-auto">
              <Link href="/">
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  トップページに戻る
                </a>
              </Link>
            </div>
          </div>
          {/* text - end */}
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
