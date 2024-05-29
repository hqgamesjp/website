import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { createClient } from "contentful";
import { Entry, EntryCollection } from "contentful";
import { Document, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IArticleFields, IGameFields } from "../../@types/generated/contentful";
import ArticleLink from "../components/blog/ArticleLink";
import React from "react";

export const buildClient = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });
  return client;
};

export async function fetchArticles(): Promise<Entry<IArticleFields>[]> {
  // Contentfulから記事データを取得
  const client = buildClient();
  const response: EntryCollection<IArticleFields> = await client.getEntries({
    content_type: "article",
  });

  // 投稿日時で降順ソート
  let sortedArticles = response.items.sort(function (a, b) {
    return a.fields.date > b.fields.date ? -1 : 1;
  });

  // 投稿日時のフォーマットを調整
  sortedArticles.forEach((article) => {
    article.fields.date = article.fields.date.split("T")[0];
  });

  return sortedArticles;
}

export async function fetchGames(): Promise<Entry<IGameFields>[]> {
  // Contentfulからゲームデータを取得
  const client = buildClient();
  const response: EntryCollection<IGameFields> = await client.getEntries({
    content_type: "game",
  });

  // 価格の表記を調整
  // response.items.forEach((item) => {
  //   item.fields.price_str = "¥ " + item.fields.price.toLocaleString();
  // });

  // IDで降順ソート
  const sortedGames = response.items.sort((a, b) => b.fields.id - a.fields.id);

  return sortedGames;
}

// リッチテキスト内にembedされた画像を読み込むための設定
export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const src = "https:" + node.data.target.fields.file.url;
      const height = node.data.target.fields.file.details.image.height;
      const width = node.data.target.fields.file.details.image.width;
      const alt = node.data.target.fields.title;
      const caption = node.data.target.fields.description;
      const tags = node.data.target.metadata.tags;

      if (tags.some((item: any) => item.sys.id === "grid2")) {
        return (
          <div className="ImageWrapperGrid2">
            <img src={src} width={width} height={height} alt={alt} />
            <div className="captionGrid2">{caption}</div>
          </div>
        );
      } else if (tags.some((item: any) => item.sys.id === "mini")) {
        return (
          <div className="ImageWrapperMini">
            <img src={src} width={width} height={height} alt={alt} />
            <div className="caption">{caption}</div>
          </div>
        );
      } else {
        return (
          <div className="ImageWrapper">
            <img src={src} width={width} height={height} alt={alt} />
            <div className="caption">{caption}</div>
          </div>
        );
      }
    },
    // 別記事（Entry）
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      const article = {
        slug: node.data.target.fields.slug,
        thumbnail: node.data.target.fields.thumbnail.fields.file.url,
        date: moment(node.data.target.fields.date).utc().format("YYYY/MM/DD"),
        title: node.data.target.fields.title,
        description: documentToString(node.data.target),
      };
      return <ArticleLink article={article} />;
    },
  },
  renderMark: {
    [MARKS.UNDERLINE]: (text: any) => <s>{text}</s>,
  },
};

// 上記optionsを組み込んだもの
export function _documentToReactComponents(content: any) {
  const result = documentToReactComponents(content, options);
  return result;
}

// 本文をひとつの文字列にして返却
export function documentToString(article: Entry<IArticleFields>): string {
  // すべての段落の文字列を取り出す
  let paragraphs: string[] = [];

  const contents = article.fields.content.content;
  contents.forEach((item) => {
    if (!item.content) return;

    // 各コンテンツ要素内の文字列をまとめたあと、配列に格納
    const paragraph = item.content
      .map((content: any) => content.value)
      .join(" ");
    paragraphs.push(paragraph);
  });

  // 連結して返却
  const allParagraphs: string = paragraphs.join(" ");
  return allParagraphs;
}
