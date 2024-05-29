import React from "react";
import Link from "next/link";
import Image from "next/image";
import { documentToString } from "../../../libs/contentful";
import type { NextPage, GetStaticPaths, InferGetStaticPropsType } from "next";
import { Entry } from "contentful";
import Layout from "../../../components/common/Layout";
import BlogLayout from "../../../components/blog/BlogLayout";
import { SeoParams } from "../../../libs/seo";
import {
  buildClient,
  _documentToReactComponents,
} from "../../../libs/contentful";
import { IArticleFields } from "../../../../@types/generated/contentful";
import { articlesCategories } from "../../../constants/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import ArticleCard from "../../../components/blog/ArticleCard";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = articlesCategories.map((cat: string) => {
    return {
      params: { category: cat },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { category: string };
}) => {
  // Contentfulから記事データを取得
  const client = buildClient();
  const { items } = await client.getEntries<IArticleFields>({
    content_type: "article",
    "fields.category": params.category,
  });

  // 投稿日時で降順ソート
  let sortedArticles = items.sort(function (a, b) {
    return a.fields.date > b.fields.date ? -1 : 1;
  });

  // 投稿日時のフォーマットを調整
  sortedArticles.forEach((article) => {
    article.fields.date = article.fields.date.split("T")[0];
  });

  return {
    props: { articles: items, params: params },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Article: NextPage<Props> = ({
  articles,
  params,
}: {
  articles: Entry<IArticleFields>[];
  params: { category: string };
}) => {
  const seo: SeoParams = {
    pageTitle: params.category,
    pageDescription: "記事一覧：" + params.category,
    pagePath: "/blog/category/" + params.category,
  };
  return (
    <Layout seo={seo}>
      <div>
        <div className="bg-white">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
            {/* ページタイトル */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-gray-800 text-4xl md:text-6xl font-bold text-center mb-2">
                Blog
              </h2>
              <p className="text-sm lg:text-lg text-gray-800 text-center">
                ゲームの新作情報・攻略情報などを投稿していきます
              </p>
            </div>

            <BlogLayout>
              <div className="grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 md:gap-6 xl:gap-8">
                {/* カテゴリ名の表示 */}
                <div className="flex text-gray-700">
                  <FontAwesomeIcon
                    className="w-6 h-6 mr-2 my-auto"
                    icon={faFolderOpen}
                  />{" "}
                  <p className="text-xl font-bold">
                    カテゴリ：{params.category}
                  </p>
                </div>

                {/* 検索結果が0件 */}
                {articles.length == 0 && (
                  <p>検索条件にヒットする記事がありませんでした</p>
                )}

                {/* 記事一覧 */}
                {articles.map((article) => (
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

export default Article;
