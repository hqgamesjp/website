import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition as IconDefinitionBrands } from "@fortawesome/free-brands-svg-icons";
import {
  faNewspaper,
  faStar,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function BottomMenu() {
  const pages: {
    name: string;
    path: string;
    icon: any;
    // FIXME: 型定義
    // icon: IconDefinition | IconDefinitionBrands;
  }[] = [
    {
      name: "Games",
      path: "/games",
      icon: faStar,
    },
    {
      name: "Blog",
      path: "/blog",
      icon: faNewspaper,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: faMessage,
    },
    {
      name: "Twitter",
      path: "https://twitter.com/HQGames_jp",
      icon: faTwitter,
    },
  ];

  return (
    <nav className="sm:hidden sticky bottom-0 z-10 bg-gray-100 border-t-2 border-gray-300 flex items-center justify-items-center w-full h-12">
      {pages.map((page) => (
        <Link key={page.name} href={page.path}>
          <a className="w-1/4 text-center text-gray-500 text-xs">
            <FontAwesomeIcon
              className="w-4 h-4 mx-auto mb-1"
              icon={page.icon}
            />
            <p>{page.name}</p>
          </a>
        </Link>
      ))}
    </nav>
  );
}

export default BottomMenu;
