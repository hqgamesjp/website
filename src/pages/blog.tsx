import type { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Layout from "../components/common/Layout";
import BlogLayout from "../components/blog/BlogLayout";
import { SeoParams } from "../libs/seo";
import { documentToString } from "../libs/contentful";
import { fetchArticles } from "../libs/contentful";
import ArticleCard from "../components/blog/ArticleCard";

// ストアから記事データを取得
export const getStaticProps = async () => {
  const articles = await fetchArticles();

  return {
    props: {
      articles,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blog: NextPage<Props> = ({ articles }) => {
  // 受け取った検索ワードによってフィルタリング
  const router = useRouter();
  const word: any = router.query.word || "";

  let filterdArticles = articles;

  if (word) {
    filterdArticles = articles.filter((article) => {
      const content: string = article.fields.title + documentToString(article);
      return content.match(word);
    });
  }

  const seo: SeoParams = {
    pageTitle: "Blog",
    pageDescription: "ゲームの新作情報・攻略情報などを投稿していきます",
    pagePath: "/blog",
  };

  return (
    <Layout seo={seo}>
      <div>
        <div className="bg-white">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
            {/* text - start */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-gray-800 text-4xl md:text-6xl font-bold text-center mb-2">
                Blog
              </h2>
              <p className="max-w-screen-md text-gray-500 sm:text-lg text-center mx-auto">
                ゲームの新作情報・攻略情報などを投稿していきます
              </p>
            </div>
            {/* text - end */}
            <BlogLayout>
              <div className="grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 md:gap-6 xl:gap-8">
                {/* 記事一覧 */}
                {filterdArticles &&
                  filterdArticles.map((article) => (
                    <ArticleCard key={article.sys.id} article={article} />
                  ))}
              </div>
            </BlogLayout>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
