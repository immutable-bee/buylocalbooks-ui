import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({ filter: "none", local: "true" });

  const router = useRouter();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {};

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    router.push(
      `/search?term=${searchTerm}&filter=${filter.filter}&local=${filter.local}`
    );
  };

  return (
    <div className="flex  sm:!pt-0 !pt-4">
      <div className="flex border sm:border-2 border-gray-300 rounded-2xl pl-3 h-[50px]">
        <Image
          src="./images/search-iconn.svg"
          width={15}
          height={14}
          alt="icon"
          className="mx-[6px] w-4"
        />
        {/* TODO: UI needs refactor, initial caret size is tiny when input field
        is selected */}
        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text"
            placeholder="Search Local Books"
            className="text-[14px] focus:outline-none rounded-2xl w-[250px] mx-2"
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          {searchTerm && (
            <button
              type="submit"
              className="absolute right-0 h-8 flex items-center justify-center px-2"
            >
              <Image
                src="./images/icons/arrow-right.svg"
                width={15}
                height={14}
                alt="icon"
              />
            </button>
          )}
        </form>
      </div>

      <div className="">
        <button
          type="button"
          className="bg-sky-500  ml-2 rounded-2xl h-[50px] w-[50px] flex items-center justify-center border sm:border-2 border-black"
        >
          <Image
            src="./images/filter.svg"
            width={15}
            height={14}
            alt="icon"
            className="w-5 h-5 "
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
