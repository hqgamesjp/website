import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Entry } from "contentful";
import { IGameFields } from "../../@types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Asset } from "contentful";
import styles from "../styles/Games.module.css";

function GameModal(props: { game: Entry<IGameFields> }) {
  // photosが設定されている場合、パッケージ画像と連結した配列にする
  const photos: Asset[] = props.game.fields.photos
    ? [props.game.fields.image, ...props.game.fields.photos]
    : [props.game.fields.image];

  // 表示中の画像を切り替える
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // photosが無いときはサムネイルと左右送りボタンを表示しない
  const isPhotosExist: boolean = photos.length > 1;

  const prevPhotoIndex = (e: any) => {
    // 0のときは終了
    if (selectedPhotoIndex != 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  const nextPhotoIndex = (e: any) => {
    // 最後尾のときは終了
    if (selectedPhotoIndex != photos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  const changePhotoIndex = (e: any, index: number) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <>
      <div className="bg-white p-6 sm:p-8 lg:p-12 w-full h-full">
        <div className="w-full h-full">
          <div className="sm:flex sm:items-center sm:space-x-8 w-full h-full">
            {/* <!-- images - start --> */}
            <div className="flex flex-col h-1/2 sm:h-full sm:w-1/2 sm:space-y-8">
              {/* 上部 */}
              <div className="h-full sm:h-2/3 my-auto">
                <div className="relative rounded-lg overflow-hidden w-auto h-full">
                  {/* prevボタン */}
                  {isPhotosExist && selectedPhotoIndex != 0 && (
                    <div className="absolute flex items-center top-0 left-0 z-10 h-full cursor-pointer">
                      <a
                        onClick={prevPhotoIndex}
                        className="flex items-center opacity-50 hover:opacity-90 h-1/3 inline-block bg-white hover:bg-white focus-visible:ring ring-indigo-300 text-white-500 active:text-white-700 text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-4 py-3"
                      >
                        <div className="">←</div>
                      </a>
                    </div>
                  )}

                  {/* nextボタン */}
                  {isPhotosExist && selectedPhotoIndex < photos.length - 1 && (
                    <div className="absolute flex items-center top-0 right-0 z-10 h-full cursor-pointer">
                      <a
                        onClick={nextPhotoIndex}
                        className="flex items-center opacity-50 hover:opacity-90 h-1/3 inline-block bg-white hover:bg-white focus-visible:ring ring-indigo-300 text-white-500 active:text-white-700 text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-4 py-3"
                      >
                        <div className="">→</div>
                      </a>
                    </div>
                  )}

                  {/* 画像 */}
                  {/* TODO: 画像枠を正方形に固定 */}
                  <img
                    src={`https:${photos[selectedPhotoIndex].fields.file.url}`}
                    alt={photos[selectedPhotoIndex].fields.title}
                    // layout="fill"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* 下部（サムネイル） */}
              {isPhotosExist && (
                <div className="invisible sm:visible h-0 sm:h-1/3">
                  <div className="grid grid-cols-4 gap-2 h-full">
                    {photos &&
                      photos.map((photo, index) => (
                        <div
                          key={photo.fields.title}
                          className={
                            index == selectedPhotoIndex
                              ? styles.ThumbnailActive
                              : styles.Thumbnail
                          }
                        >
                          <a
                            onClick={(e) => changePhotoIndex(e, index)}
                            className="relative block w-full h-full"
                          >
                            <img
                              src={`https:${photo.fields.file.url}`}
                              alt={photo.fields.title}
                              // layout="fill"
                              className="mx-auto h-full object-cover object-center group-hover:scale-110 transition duration-200 cursor-pointer hover:opacity-50 rounded-md"
                            />
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
            {/* <!-- images - end --> */}

            {/* <!-- content - start --> */}
            <div className="md:pl-8 py-4 md:py-8 sm:w-1/2">
              {/* <!-- name - start --> */}
              <div className="mb-2 md:mb-3">
                <span className="inline-block text-gray-500 mb-0.5">
                  {props.game.fields.year}
                </span>
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                  {props.game.fields.name}
                </h2>
              </div>
              {/* <!-- name - end --> */}

              {/* <!-- description - start --> */}
              <div className="mt-2 md:mt-4">
                <p className="text-gray-500 text-sm">
                  {documentToReactComponents(props.game.fields.description)}
                </p>
              </div>
              {/* <!-- description - end --> */}

              {/* <!-- purchase - start --> */}
              <div className="flex gap-2.5 mt-8 md:mt-12">
                {props.game.fields.label.includes("販売中") && (
                  <Link href={props.game.fields.ecUrl}>
                    <a
                      target="_blank"
                      className="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                    >
                      購入はこちら
                    </a>
                  </Link>
                )}

                {props.game.fields.label.includes("販売終了") && (
                  <div className="inline-block flex-1 sm:flex-none bg-gray-500 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    販売終了
                  </div>
                )}
              </div>
              {/* <!-- purchase - end --> */}

              {/* <!-- buttons - start --> */}
              {/* <div className="flex gap-2.5 mt-8 md:mt-12">
                <a
                  href="#"
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
              </div> */}
              {/* <!-- buttons - end --> */}
            </div>
            {/* <!-- content - end --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default GameModal;
