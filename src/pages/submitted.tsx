import type { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/common/Layout";
import { SeoParams } from "../libs/seo";

const Submitted: NextPage = () => {
  const seo: SeoParams = {
    pageTitle: "Contact",
    pageDescription: "Contactページです",
    pagePath: "/contact",
  };

  return (
    <Layout seo={seo}>
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              送信完了
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              お問い合わせありがとうございました。
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

export default Submitted;
