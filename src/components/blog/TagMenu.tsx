import Link from "next/link";
import { articlesTags } from "../../constants/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

function TagMenu() {
  return (
    <>
      <div className="flex mb-4 text-gray-800 font-bold">
        <FontAwesomeIcon className="w-6 h-6" icon={faTag} />
        <p className="ml-2">タグ</p>
      </div>

      <div className="ml-8">
        {articlesTags &&
          articlesTags.map((tag) => (
            <div
              key={tag}
              className="mb-1 hover:text-gray-600 active:text-gray-700"
            >
              <Link
                // href={{ pathname: "/articles", query: { tag: tag } }}
                href={`/blog/tag/${tag}`}
              >
                <a className="block text-sm">{tag}</a>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default TagMenu;
