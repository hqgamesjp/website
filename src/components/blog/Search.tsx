import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const router = useRouter();

  const [word, setWord] = useState("");
  const handleWordChange = (event: any) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push({
      pathname: "/blog",
      query: {
        word: word,
      },
    });
  };

  return (
    <>
      <div className="flex mb-4 text-gray-800 font-bold">
        <FontAwesomeIcon className="w-6 h-6" icon={faMagnifyingGlass} />
        <p className="ml-2">記事検索</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <input
            type="search"
            value={word}
            onChange={handleWordChange}
            id="default-search"
            className="block p-2 pl-4 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium text-sm px-4 py-2"
          >
            <FontAwesomeIcon className="w-4 h-4" icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
