import React from "react";
import Link from "next/link";
import * as gtag from "../../libs/gtag";

function Footer() {
  // GoogleAnalyticsイベント設定
  const ClickEvent = () => {
    gtag.event({
      action: "click",
      category: "other",
      label: "to_twitter",
    });
  };

  const pages: {
    name: string;
    path: string;
  }[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Games",
      path: "/games",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="max-w-[1024px] mx-auto">
        <div className="flex justify-between items-center border-t border-b gap-4 px-8 py-2 sm:py-6">
          {/* 各ページへのリンク */}
          <nav className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 sm:gap-6">
            {pages.map((page) => (
              <Link key={page.name} href={page.path}>
                <a className="text-sm sm:text-base text-gray-500 hover:text-gray-300 active:text-gray-300 transition duration-100">
                  {page.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* SNSへのリンク */}
          <div className="flex gap-4">
            {/* <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <svg
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a> */}
            <Link href="https://twitter.com/HQGames_jp">
              <a
                onClick={ClickEvent}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 active:text-gray-300 transition duration-100"
              >
                <svg
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </Link>
          </div>
        </div>

        <div className="text-gray-400 text-xs sm:text-sm text-center py-4 sm:py-8">
          <Link href="/privacy-policy">
            <a className="text-gray-400 hover:text-gray-300 active:text-gray-300 transition duration-100 mb-2">
              Privacy Policy
            </a>
          </Link>
          <p>© 2023 - Head Quarter Games All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;