import Sidebar from "./Sidebar";

function BlogLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="sm:flex relative">
      {/* 左カラム：コンテンツ表示 */}
      <div className="sm:w-8/12 px-4">{children}</div>
      {/* 右カラム：サイドメニュー */}
      <div className="sm:block md:w-4/12 px-2">
        <div className="top-20">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default BlogLayout;
