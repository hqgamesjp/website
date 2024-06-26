// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IArticleFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Date */
  date: string;

  /** Writer */
  writer: string;

  /** Category */
  category?: string[] | undefined;

  /** Tags */
  tags?: string[] | undefined;

  /** Thumbnail */
  thumbnail: Asset;

  /** Content */
  content: Document;
}

/** ブログ記事 */
// export interface IArticle extends Entry<IArticleFields> {
//   sys: {
//     id: string;
//     type: string;
//     createdAt: string;
//     updatedAt: string;
//     locale: string;
//     contentType: {
//       sys: {
//         id: "article";
//         linkType: "ContentType";
//         type: "Link";
//       };
//     };
//   };
// }

export interface IGameFields {
  /** name */
  name: string;

  /** slug */
  slug: string;

  /** image */
  image: Asset;

  /** year */
  year: number;

  /** price */
  price: number;

  /** ec url */
  ecUrl: string;

  /** description */
  description: Document;

  /** label */
  label: string[];

  /** photos */
  photos?: Asset[] | undefined;

  /** id */
  id: number;

  /** player */
  player: string;

  /** time */
  time: string;
}

/** 制作したゲーム */

export interface IGame extends Entry<IGameFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "game";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "article" | "game";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
