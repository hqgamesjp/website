import { useState, useEffect } from "react";
import { Entry } from "contentful";
import type { NextPage, InferGetStaticPropsType } from "next";
import { motion } from "framer-motion";
import Layout from "../components/common/Layout";
import { ScrollFadeIn } from "../components/common/ScrollFadeIn";
import { SeoParams } from "../libs/seo";
import { IGameFields } from "../../@types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import GameModal from "../components/GameModal";
import styles from "../styles/Games.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { fetchGames } from "../libs/contentful";

export const getStaticProps = async () => {
  const games = await fetchGames();
  return {
    props: {
      games,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Games: NextPage<Props> = ({ games }) => {
  const seo: SeoParams = {
    pageTitle: "Games",
    pageDescription: "Head Quarter Games制作のゲーム一覧です",
    pagePath: "/games",
  };

  useEffect(() => {
    ScrollFadeIn();
  }, []);

  // モーダル
  const [selectedGame, setSelectedGame] = useState<Entry<IGameFields> | null>(
    null
  );

  const toggleModal = (e: any, selectedGame: Entry<IGameFields> | null) => {
    if (selectedGame) {
      // モーダルを開くときはゲーム情報を渡してスクロールを禁止する
      setSelectedGame(selectedGame);
      document.documentElement.style.setProperty("--works-scroll", "hidden");
    } else {
      // 閉じるときはスクロールを解禁
      setSelectedGame(null);
      document.documentElement.style.setProperty("--works-scroll", "visible");
    }
  };

  return (
    <Layout seo={seo}>
      <>
        <div
          onClick={(e) => toggleModal(e, null)}
          className={
            selectedGame
              ? "fixed top-0 left-0 w-screen h-screen bg-gray-500/50 duration-500 z-30 overflow-hidden"
              : "fixed top-0 left-0 w-screen h-screen duration-500 z-30 invisible"
          }
        ></div>
        <div className="bg-white">
          <div className="max-w-screen-2xl px-4 sm:px-8 mx-auto">
            {/* text - start */}
            <div className="mb-10 sm:mb-16">
              <h2 className="text-gray-800 text-4xl md:text-6xl font-bold text-center mb-2">
                Games
              </h2>

              <p className="max-w-screen-md text-gray-500 sm:text-lg text-center mx-auto">
                Head Quarter Games制作のゲーム一覧です
              </p>

              {/* <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              TODO:
              ゲームの個別紹介記事を作成して、そっちにリンクする（現在はAmazon）
            </p> */}
            </div>
            {/* text - end */}

            <div className="grid">
              {games &&
                games.map((game: Entry<IGameFields>) => (
                  <motion.div
                    variants={{
                      offscreen: {
                        // 画面外の場合のスタイル
                        y: 30,
                        opacity: 0,
                      },
                      onscreen: {
                        // 画面内の場合のスタイル
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 0.2,
                          ease: "easeOut",
                        },
                      },
                    }}
                    initial="offscreen" // 初期表示はoffscreen
                    whileInView="onscreen" // 画面内に入ったらonscreen
                    viewport={{ once: true, amount: 0 }}
                    key={game.sys.id}
                  >
                    <div className="sm:flex mb-12">
                      <a
                        href={`/games/${game.fields.slug}`}
                        rel="noopener noreferrer"
                        className="group sm:w-2/5 h-96 block rounded-lg overflow-hidden relative mb-2 lg:mb-3 cursor-pointer"
                      >
                        <img
                          src={`https:${game.fields.image.fields.file.url}`}
                          alt={game.fields.image.fields.title}
                          className="mx-auto h-full object-cover object-center group-hover:scale-110 transition duration-200"
                        />
                      </a>

                      <div className="sm:w-3/5 my-auto">
                        <div className="flex w-full justify-between items-start gap-2 my-auto px-2">
                          <div className="flex flex-col">
                            <a
                              // onClick={(e) => toggleModal(e, game)}
                              href={`/games/${game.fields.slug}`}
                              rel="noopener noreferrer"
                              className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 cursor-pointer"
                            >
                              {game.fields.name}
                            </a>
                            <span className="text-gray-500">
                              {game.fields.year}
                            </span>
                          </div>

                          <div className="flex flex-col items-end">
                            {game.fields.label.includes("販売終了") && (
                              <div className="bg-gray-400 text-sm text-white px-4 py-1 rounded">
                                SOLD OUT
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex w-full justify-between items-start gap-2 mt-2">
                          <div className="max-w-screen-md text-gray-500 text-sm px-2">
                            {documentToReactComponents(game.fields.description)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* モーダル */}
            {selectedGame && (
              <>
                <div className={styles.Modal__Wrapper}>
                  <GameModal game={selectedGame} />
                  {/* Closeボタン */}
                  <div
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={(e) => toggleModal(e, null)}
                  >
                    <FontAwesomeIcon
                      className="w-6 h-6 text-gray-500"
                      icon={faXmark}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Games;
