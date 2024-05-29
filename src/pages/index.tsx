import type { NextPage, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/common/Layout";
import LinkButton from "../components/common/LinkButton";
import ArticlesList from "../components/index/ArticleList";
import GamesList from "../components/index/GamesList";
import { SeoParams } from "../libs/seo";
import { buildClient } from "../libs/contentful";
import { IArticleFields, IGameFields } from "../../@types/generated/contentful";
import { EntryCollection } from "contentful";
import { fetchArticles, fetchGames } from "../libs/contentful";

export const getStaticProps = async () => {
  const articles = await fetchArticles();
  const games = await fetchGames();

  return {
    props: {
      articles,
      games,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ articles, games }) => {
  const seo: SeoParams = {
    pageDescription:
      "Head Quarter Gamesは、慶應HQのOBによるボードゲームブランドです。ディープなボードゲームファンの皆さんにも楽しんでいただける、やりごたえのあるゲームを制作しています。また、私たちのゲーム経験・知識もコラムとして発信中です。。",
    pagePath: "/",
  };
  return (
    <>
      <section className="relative w-screen h-40 sm:h-96 pb-40 -z-20">
        <div className="absolute top-0 bg-gray-100 overflow-hidden w-full h-full opacity-90 -z-10 bg-black">
          <img
            src={"/images/index/index_bg.webp"}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div>
          <div className="pt-12 sm:pt-36 mx-auto">
            <p className="text-white text-3xl sm:text-5xl md:text-6xl text-center font-AlternateRegular">
              High Quality Games, Now on Your Table.
            </p>
            <p className="text-white mt-2 text-lg sm:text-3xl md:text-4xl text-center font-NotoSerifJPRegular">
              豊かな
              <ruby>
                体験
                <rt>ゲーム</rt>
              </ruby>
              を、テーブルに。
            </p>
          </div>
        </div>
      </section>

      <Layout seo={seo} header={false}>
        <div className="bg-white px-8">
          {/* 会社紹介コメント */}
          <section className="mb-20">
            <div className="sm:flex justify-center items-center">
              <div className="w-48 sm:w-1/3 mx-auto mb-8 sm:mb-0 sm:pr-6">
                <img
                  src={"/images/logo.webp"}
                  alt=""
                  className="drop-shadow-2xl"
                />
              </div>
              <div className="sm:w-2/3 text-sm sm:text-sm md:text-lg font-NotoSerifJPRegular text-gray-700">
                <p>
                  Head Quarter Gamesは、
                  慶應HQのOBによるボードゲームブランドです。
                </p>
                <p>
                  ディープなボードゲームファンの皆さんにも楽しんでいただける、
                  やりごたえのあるゲームを制作しています。
                </p>
                <p>また、私たちのゲーム経験・知識もコラムとして発信中です。</p>
              </div>
            </div>
          </section>

          {/* 新着記事 */}
          <section className="mb-20 md:mb-40">
            <h2 className="text-lg sm:text-2xl border-b-2 mb-8 pb-2 font-bold text-gray-700">
              新着記事
            </h2>
            <ArticlesList articles={articles}></ArticlesList>
            <LinkButton
              url="/blog"
              message="もっと記事を見る"
              colorCode="#5d5d5d"
            />
          </section>

          {/* ゲーム一覧 */}
          {/* TODO: ゲーム個別ページを作成 */}
          <section className="">
            <h2 className="text-lg sm:text-2xl border-b-2 mb-8 pb-2 font-bold text-gray-700">
              ゲーム一覧
            </h2>
            <GamesList games={games}></GamesList>
            <LinkButton
              url="/games"
              message="他のゲームも見る"
              colorCode="#5d5d5d"
            />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
