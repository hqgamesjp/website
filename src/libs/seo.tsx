import Head from "next/head";

export interface SeoParams {
  pageTitle?: string;
  pageDescription?: string;
  pagePath: string;
  pageImg?: string;
  pageImgWidth?: string;
  pageImgHeight?: string;
}

export const LOGO_URL: string =
  "https://images.ctfassets.net/05lv0zp6cltm/5M2WZhOHY31og9QrZGnwwN/8f7bc957a394eed4fec3247aaa1ee8d1/hqgames_logo.png";

function Seo({ seo }: { seo: SeoParams }) {
  // デフォルト値の設定
  const title: string = seo.pageTitle
    ? `${seo.pageTitle} | Head Quarter Games`
    : "Head Quarter Games";
  const defaultDescription: string =
    "Head Quarter Gamesは、慶應HQのOBによるボードゲームブランドです。ディープなボードゲームファンの皆さんにも楽しんでいただける、やりごたえのあるゲームを制作しています。また、私たちのゲーム経験・知識もコラムとして発信中です。。";
  const description: string = seo.pageDescription
    ? seo.pageDescription
    : defaultDescription;
  const url: string = seo.pagePath;
  const imgUrl: string = seo.pageImg ? seo.pageImg : LOGO_URL;
  const imgWidth: string = seo.pageImgWidth ? seo.pageImgWidth : "1280";
  const imgHeight: string = seo.pageImgHeight ? seo.pageImgHeight : "640";

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap"
        rel="stylesheet"
      /> */}
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Seo;
