import Link from "next/link";
import Image from "next/image";
import { Entry } from "contentful";
import { IArticleFields } from "../../../@types/generated/contentful";
import { documentToString } from "../../libs/contentful";

function ArticlesList(props: { articles: Entry<IArticleFields>[] }) {
  // 新着8件のみ表示する
  const limitedArticles = props.articles.slice(0, 8);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 mb-4 md:mb-12">
      {limitedArticles &&
        limitedArticles.map((article) => (
          <Link key={article.sys.id} href={`/blog/${article.fields.slug}`}>
            <a className="hover:text-gray-300 active:text-gray-400 transition duration-100">
              <div className="flex flex-col pb-8 overflow-hidden ease-in group">
                {/* サムネイル画像 */}
                <div className="group h-32 sm:h-48 w-full block self-start bg-gray-100 overflow-hidden">
                  <img
                    src={`https:${article.fields.thumbnail.fields.file.url}`}
                    alt={article.fields.thumbnail.fields.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />
                </div>

                {/* 日付 */}
                <span className="mt-3 text-gray-400 text-xs md:text-sm">
                  {article.fields.date}
                </span>

                {/* タイトル */}
                <h2 className="mt-2 text-sm md:text-base text-gray-700 font-bold group-hover:text-gray-400 group-active:text-gray-400">
                  <div className="max-h-14 line-clamp-2">
                    {article.fields.title}
                  </div>
                </h2>

                {/* 本文 */}
                <div className="mt-2 text-gray-500 text-xs md:text-sm line-clamp-2">
                  {documentToString(article)}
                </div>
              </div>
            </a>
          </Link>
        ))}
    </div>
  );
}

export default ArticlesList;
