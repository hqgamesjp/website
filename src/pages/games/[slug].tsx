import React from "react";
import { useState, FC } from "react";
import type { NextPage, GetStaticPaths, InferGetStaticPropsType } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import moment from "moment";
import Layout from "../../components/common/Layout";
import LinkButton from "../../components/common/LinkButton";
import ImgModal from "../../components/games/ImgModal";
import { SeoParams } from "../../libs/seo";
import { buildClient } from "../../libs/contentful";
import { IGameFields } from "../../../@types/generated/contentful";
import { Entry } from "contentful";
import { fetchGames } from "../../libs/contentful";

const client = buildClient();

export const getStaticPaths: GetStaticPaths = async () => {
  const games = await fetchGames();

  const paths = games.map((game) => {
    return {
      params: { slug: game.fields.slug },
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
  const games = await fetchGames();
  const game = games.find((game) => game.fields.slug === params.slug);

  return {
    props: { game },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Game: NextPage<Props> = ({ game }: { game: Entry<IGameFields> }) => {
  const seo: SeoParams = {
    pageTitle: game.fields.name,
    pageDescription: game.fields.name, // TODO: 動的OGP
    pagePath: "/games/" + game.fields.slug,
    pageImg: "https:" + game.fields.image.fields.file.url,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImg("");
  };

  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  const handleImgClick = (index: number) => {
    setIsOpen(true);
    setSelectedImgIndex(index);
  };

  const handlePreviousClick = () => {
    if (selectedImgIndex !== null && selectedImgIndex > 0) {
      setSelectedImgIndex(selectedImgIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (!game.fields.photos) {
      return;
    }
    if (
      selectedImgIndex !== null &&
      selectedImgIndex < game.fields.photos.length - 1
    ) {
      setSelectedImgIndex(selectedImgIndex + 1);
    }
  };

  return (
    <Layout seo={seo}>
      <div className="md:flex max-w-screen h-full mx-4">
        {/* 左ペイン */}
        <div className="sm:w-2/3 md:w-1/2 mx-auto">
          <img
            src={`https:${game.fields.image.fields.file.url}`}
            alt={game.fields.image.fields.title}
            width={1000}
            height={1000}
            className="mx-auto object-cover object-center group-hover:scale-110 transition duration-200"
          />
          {/* 下部（サムネイル） */}
          {game.fields.photos && (
            <div className="sm:h-1/3">
              <div className="grid grid-cols-4 gap-2 h-full">
                {game.fields.photos.map((photo, index) => (
                  <div key={photo.fields.title}>
                    <a className="relative block w-full h-20 sm:h-full">
                      <img
                        src={`https:${photo.fields.file.url}`}
                        alt={photo.fields.title}
                        onClick={() => handleImgClick(index)}
                        className="mx-auto h-full object-cover object-center group-hover:scale-110 transition duration-200 cursor-pointer hover:opacity-50"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          <ImgModal
            isOpen={isOpen}
            closeModal={closeModal}
            imgSrc={
              game.fields.photos && selectedImgIndex !== null
                ? `https:${game.fields.photos[selectedImgIndex].fields.file.url}`
                : ""
            }
            handlePreviousClick={handlePreviousClick}
            handleNextClick={handleNextClick}
          />
        </div>

        {/* 右ペイン */}
        <div className="pt-8 md:pt-32 md:pl-16 sm:w-3/4 md:w-1/2 mx-auto">
          <div className="mb-2 md:mb-3">
            {/* 発売年度 */}
            <span className="inline-block text-gray-500 mb-0.5">
              {game.fields.year}
            </span>

            {/* タイトル */}
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
              {game.fields.name}
            </h2>

            {/* 説明文 */}
            <div className="mt-2 md:mt-4 text-gray-500 text-sm">
              {documentToReactComponents(game.fields.description)}
            </div>

            {/* プレイ人数 */}
            <div className="mt-4 text-gray-500 mb-0.5">
              プレイ人数：{game.fields.player}人
            </div>

            {/* プレイ時間 */}
            <div className="mt-4 text-gray-500 mb-0.5">
              プレイ時間：約{game.fields.time}分
            </div>

            {/* 購入ボタン */}
            <div className="flex gap-2.5 mt-8 md:mt-12">
              {game.fields.label.includes("販売中") && (
                <LinkButton
                  url={game.fields.ecUrl}
                  message="Amazonで購入する"
                  colorCode="#e47911"
                />
              )}

              {game.fields.label.includes("販売終了") && (
                <div className="bg-gray-400 text-sm text-white px-4 py-1 rounded">
                  SOLD OUT
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Game;
