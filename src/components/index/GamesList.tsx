import Link from "next/link";
import Image from "next/image";
import { Entry } from "contentful";
import { IGameFields } from "../../../@types/generated/contentful";
import { documentToString } from "../../libs/contentful";

function GamesList(props: { games: Entry<IGameFields>[] }) {
  // 新着4件のみ表示する
  const limitedGames = props.games.slice(0, 4);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 mb-4 md:mb-12">
      {limitedGames &&
        limitedGames.map((game) => (
          <Link key={game.sys.id} href={`/games/${game.fields.slug}`}>
            <a className="hover:text-gray-300 active:text-gray-400 transition duration-100 cursor-pointer">
              <div className="flex flex-col pb-8 overflow-hidden ease-in group">
                {/* サムネイル画像 */}
                <div className="group mx-auto w-38 sm:w-48 h-38 sm:h-48 w-full block self-start overflow-hidden">
                  <img
                    src={`https:${game.fields.image.fields.file.url}`}
                    alt={game.fields.image.fields.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />
                </div>

                {/* 日付 */}
                <span className="mt-3 text-gray-400 text-xs md:text-sm text-center">
                  {game.fields.year}
                </span>

                {/* タイトル */}
                <h2 className="mt-2 text-sm md:text-base text-center text-gray-700 font-bold group-hover:text-gray-400 group-active:text-gray-400">
                  <div className="max-h-14 line-clamp-2">
                    {game.fields.name}
                  </div>
                </h2>
              </div>
            </a>
          </Link>
        ))}
    </div>
  );
}

export default GamesList;
