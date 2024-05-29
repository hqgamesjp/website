import Link from "next/link";
import { articlesCategories } from "../../constants/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

function CategoryMenu() {
  return (
    <>
      <div className="flex mb-4 text-gray-800 font-bold">
        <FontAwesomeIcon className="w-6 h-6" icon={faFolderOpen} />
        <p className="ml-2">カテゴリ</p>
      </div>

      <div className="ml-8">
        {articlesCategories &&
          articlesCategories.map((category) => (
            <div
              key={category}
              className="mb-1 hover:text-gray-500 active:text-gray-700"
            >
              <Link
                // href={{ pathname: "/blog", query: { category: category } }}
                href={`/blog/category/${category}`}
              >
                <a className="block text-sm">{category}</a>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default CategoryMenu;
