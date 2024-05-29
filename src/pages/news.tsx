import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import { SeoParams } from "../libs/seo";

const News: NextPage = () => {
  const seo: SeoParams = {
    pageTitle: "News",
    pageDescription: "Newsページです",
    pagePath: "/news",
  };
  return (
    <Layout seo={seo}>
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              News
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Contentfulの記事データの中からNews属性をつけたものを抽出する。
              Newsタブを個別に用意するか、AboutMeの一部にするかは要検討かと。
              Ariticlesタブ内ではNews記事も含まれてもいいと思った。
            </p>
          </div>
          {/* text - end */}
        </div>
      </div>
    </Layout>
  );
};

export default News;
