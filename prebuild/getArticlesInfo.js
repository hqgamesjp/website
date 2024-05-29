const fs = require("fs");
const contentful = require("contentful");
require("dotenv").config();

const buildClient = () => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });
  return client;
};

const getArticlesInfo = async () => {
  const client = buildClient();

  const response = await client.getEntries({
    content_type: "article",
  });

  // カテゴリ一覧の取得
  let categoryList = response.items.map((item) => {
    return item.fields.category ? item.fields.category[0] : "";
  });
  categoryList = categoryList.filter(function (ele, pos) {
    return categoryList.indexOf(ele) == pos;
  });

  // タグ一覧の取得 TODO: ソート
  let tagList = response.items.map((item) => {
    return item.fields.tags ? item.fields.tags[0] : "";
  });
  tagList = tagList.filter(function (ele, pos) {
    return tagList.indexOf(ele) == pos;
  });
  tagList = tagList.sort();

  return [categoryList, tagList];
};

getArticlesInfo().then(([categoryList, tagList]) => {
  fs.writeFileSync(
    "data/articlesCategories.json",
    JSON.stringify(categoryList)
  );
  fs.writeFileSync("data/articlesTags.json", JSON.stringify(tagList));
  console.log(categoryList);
  console.log(tagList);
});
