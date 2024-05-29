import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import { useState } from "react";
import classnames from "classnames";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function Header() {
  const pages: {
    name: string;
    path: string;
  }[] = [
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
    <header className="w-full text-center duration-200 bg-gray-100">
      <div className="max-w-[1024px] mx-auto flex sm:justify-between h-20 sm:h-16 sm:px-8 duration-200">
        {/* Logo - start */}
        <Link href="/">
          <div className={styles.Header__Top__Logo}>
            <img src={"/images/logo_wide.webp"} alt="Logo" />
          </div>
        </Link>
        {/* </div> */}
        {/* Logo - end */}

        {/* Menu - start */}
        <nav className="hidden sm:flex justify-items-end items-end content-end w-60 max-w-md mx-auto sm:mx-0 sm:py-2">
          {pages.map((page) => (
            <Link key={page.name} href={page.path}>
              <a className="w-1/3 text-gray-800 sm:text-2xl font-Blod hover:text-gray-500 active:text-gray-600 font-AlternateRegular">
                {page.name}
              </a>
            </Link>
          ))}
        </nav>
        {/* Menu - end */}
      </div>
    </header>
  );
}

export default Header;
