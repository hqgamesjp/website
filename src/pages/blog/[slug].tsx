import React from "react";
import type { NextPage, GetStaticPaths, InferGetStaticPropsType } from "next";
import { Entry } from "contentful";
import moment from "moment";
import Layout from "../../components/common/Layout";
import BlogLayout from "../../components/blog/BlogLayout";
import { SeoParams } from "../../libs/seo";
import { _documentToReactComponents } from "../../libs/contentful";
import { fetchArticles } from "../../libs/contentful";
import { IArticleFields } from "../../../@types/generated/contentful";
import { MdDateRange } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchArticles();

  const paths = articles.map((article) => {
    return {
      params: { slug: article.fields.slug },
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
  params: { slug: string };
}) => {
  const articles = await fetchArticles();
  const article = articles.find(
    (article) => article.fields.slug === params.slug
  );

  return {
    props: { article },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Article: NextPage<Props> = ({
  article,
}: {
  article: Entry<IArticleFields>;
}) => {
  // pageDescription用に一番最初のpタグの文章を取得
  const contents: any = _documentToReactComponents(article.fields.content);
  const pTags: { props: { children: string } }[] = contents!.filter(
    (block: { type?: string }) => block.type == "p"
  );
  const description: string = pTags
    ? pTags[0].props.children
    : "Default Description";

  const seo: SeoParams = {
    pageTitle: article.fields.title,
    pageDescription: description,
    pagePath: "/blog/" + article.fields.slug,
    pageImg: "https:" + article.fields.thumbnail.fields.file.url,
  };
  return (
    <Layout seo={seo}>
      <BlogLayout>
        <div className="max-w-screen-sm mx-auto">
          <h1 className="text-gray-800 text-xl sm:text-3xl font-bold text-center mb-1 sm:mb-4">
            {article.fields.title}
          </h1>

          {/* 日付とライター名 */}
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm sm:text-md">
              <MdDateRange size={16} className="inline mr-1" />
              {moment(article.fields.date).utc().format("YYYY/MM/DD")}
            </p>

            <p className="text-gray-400 text-sm sm:text-md ml-4">
              <BsFillPersonFill size={16} className="inline mr-1" />
              {article.fields.writer}
            </p>
          </div>
          <div className="mt-4 sm:mt-8">
            <img
              src={`https:${article.fields.thumbnail.fields.file.url}`}
              alt={article.fields.thumbnail.fields.title}
              className="mx-auto object-cover object-center inset-0 group-hover:scale-110 transition duration-200"
            />
          </div>
          <div className="Article">
            {_documentToReactComponents(article.fields.content)}
          </div>
        </div>
      </BlogLayout>
    </Layout>
  );
};

export default Article;
