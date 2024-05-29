import Link from "next/link";
import { Entry } from "contentful";
import { IArticleFields } from "../../../@types/generated/contentful";
import { documentToString } from "../../libs/contentful";

function ArticleCard({ article }: { article: Entry<IArticleFields> }) {
  return (
    <Link href={`/blog/${article.fields.slug}`}>
      <a
        href="#"
        className="flex hover:text-gray-500 active:text-gray-600 transition duration-100"
      >
        <div className="flex flex-col md:flex-row items-center overflow-hidden ease-in group hover:shadow">
          <div className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative">
            <img
              src={`https:${article.fields.thumbnail.fields.file.url}`}
              alt={article.fields.thumbnail.fields.title}
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />
          </div>

          <div className="flex flex-col gap-2 p-4 lg:p-6">
            <span className="text-gray-400 text-sm">{article.fields.date}</span>

            <h2 className="text-gray-800 text-md font-bold group-hover:text-gray-600 group-active:text-gray-700">
              <div className="max-h-14 line-clamp-2">
                {article.fields.title}
              </div>
            </h2>

            <div className="text-gray-500 text-sm line-clamp-2">
              {documentToString(article)}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ArticleCard;
