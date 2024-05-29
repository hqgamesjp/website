import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import { SeoParams } from "../libs/seo";
import Router from "next/router";

const Contact: NextPage = () => {
  const seo: SeoParams = {
    pageTitle: "Contact",
    pageDescription: "Contactページです",
    pagePath: "/contact",
  };

  const sendMessage = async (event: any) => {
    event.preventDefault();

    // TODO: バリデーションチェック
    fetch("/api/send", {
      body: JSON.stringify({
        name: event.target.name.value,
        company: event.target.company.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    Router.push("/submitted");
  };

  return (
    <Layout seo={seo}>
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-4xl md:text-6xl font-bold text-center mb-2">
              Contact
            </h2>

            <p className="max-w-screen-md text-gray-500 sm:text-lg text-center mx-auto">
              Head Quarter
              Gamesや制作ゲームなどに関するお問い合わせはこちらからどうぞ。
            </p>
          </div>

          {/* Googleフォーム埋め込み */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfDF5MiQPZeQ5FIS08MzXrtv69-Qp5S4VTa93W6dPqoVBUP4A/viewform?embedded=true"
            className="mx-auto w-full h-1500 sm:h-1200"
          >
            読み込んでいます…
          </iframe>

          {/* オリジナルフォーム */}
          {/* <form
            onSubmit={sendMessage}
            className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                お名前 *
              </label>
              <input
                id="name"
                required
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                ご所属（企業名など）
              </label>
              <input
                id="company"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                メールアドレス *
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                件名 *
              </label>
              <input
                id="subject"
                required
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                お問い合わせ内容 *
              </label>
              <textarea
                id="message"
                required
                className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button className="inline-block bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                送信
              </button>

              <span className="text-gray-500 text-sm">* 必須入力</span>
            </div>
          </form> */}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
