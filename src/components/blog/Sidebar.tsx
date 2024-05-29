import Search from "./Search";
import CategoryMenu from "./CategoryMenu";
import TagMenu from "./TagMenu";

function Sidebar() {
  return (
    <>
      {/* 記事検索 */}
      <div className="mt-20 sm:mt-0 h-auto px-4 py-4 mb-4 border">
        <Search />
      </div>

      {/* カテゴリ */}
      <div className="h-auto px-4 py-4 mb-4 border">
        <CategoryMenu />
      </div>

      {/* タグ */}
      <div className="h-auto px-4 py-4 mb-4 border">
        <TagMenu />
      </div>

      {/* TODO: 最近の記事 */}
    </>
  );
}

export default Sidebar;
