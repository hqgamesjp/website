import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import { SeoParams } from "../libs/seo";
import LinkButton from "../components/common/LinkButton";

const NotFoundPage: NextPage = () => {
  const seo: SeoParams = {
    pageTitle: "404",
    pageDescription: "404 | ページが見つかりませんでした",
    pagePath: "/",
  };

  return (
    <Layout seo={seo}>
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-2 md:mb-4">
              ページが見つかりませんでした
            </h2>
            <div className="h-40"></div>
            <LinkButton
              url="/"
              message="トップページに戻る"
              colorCode="#5d5d5d"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
