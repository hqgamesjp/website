import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function BreadcrumbList(props: { type: string; value: string }) {
  const type = props.type;
  const value = props.value;

  return (
    <nav>
      <div className="flex">
        {/* 固定部分 */}
        <Link href="/blog" className="text-gray-700">
          記事一覧
        </Link>
        <FontAwesomeIcon
          className="w-4 h-4 mx-2 my-auto text-gray-500"
          icon={faCaretRight}
        />

        {/* カテゴリ */}
        {type == "category" && (
          <Link href={{ pathname: "/blog", query: { category: value } }}>
            {value}
          </Link>
        )}

        {/* タグ */}
        {type == "tag" && (
          <Link href={{ pathname: "/blog", query: { tag: value } }}>
            {value}
          </Link>
        )}

        <FontAwesomeIcon
          className="w-4 h-4 mx-2 my-auto text-gray-500"
          icon={faCaretRight}
        />
      </div>
    </nav>
  );
}

export default BreadcrumbList;
