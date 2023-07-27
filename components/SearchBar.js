import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // filter dropdown & state/handlers
  const filters = ["all", "author", "title", "isbn"];
  const locations = ["local", "national"];
  const [showDropdown, setShowDropdown] = useState(false);
  const [filter, setFilter] = useState({
    all: true,
    author: false,
    title: false,
    isbn: false,
  });

  const [location, setLocation] = useState({
    local: true,
    national: false,
  });

  const handleDropdownToggle = (event) => {
    event.stopPropagation();
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleInputChange = (state, setState) => (event) => {
    const { name, checked } = event.target;

    if (state[name] === true) {
      event.preventDefault();
      return;
    }

    setState({
      ...Object.fromEntries(Object.keys(state).map((k) => [k, false])),
      [name]: checked,
    });
  };

  // searchbar handlers
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  const handleSearch = (event) => {
    let activeFilter = Object.keys(filter).find((key) => filter[key] === true);
    if (activeFilter === "all") {
      activeFilter = "none";
    }

    event.preventDefault();
    router.push(
      `/search?term=${searchTerm}&filter=${activeFilter}&local=${location.local}`
    );
  };

  const dropdownRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        buttonRef.current !== event.target
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          ref={buttonRef}
          type="button"
          className="bg-sky-500  ml-2 rounded-2xl h-[50px] w-[50px] flex items-center justify-center border sm:border-2 border-black"
          onClick={handleDropdownToggle}
        >
          <Image
            src="./images/filter.svg"
            width={15}
            height={14}
            alt="icon"
            className="w-5 h-5 "
          />
        </button>

        {
          /* TODO: styling for dropdown in accordance with the brand, also want it to close when a user clicks outside the dropdown */
          showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-[160px] right-10 bg-white border border-gray-300 rounded-lg p-4"
            >
              <div>
                <h2 className="font-medium mb-2">Filter Options</h2>
                {filters.map((filterOption) => (
                  <div className="flex items-center mb-2" key={filterOption}>
                    <input
                      type="checkbox"
                      name={filterOption}
                      id={filterOption}
                      checked={filter[filterOption]}
                      onChange={handleInputChange(filter, setFilter)}
                      className="mr-2"
                    />
                    <label htmlFor={filterOption}>
                      {capitalizeFirstLetter(filterOption)}
                    </label>
                  </div>
                ))}
              </div>
              <hr className="my-4 border-black border-t-2 w-3/4 mx-auto" />
              <div>
                <h2 className="font-medium mb-2">Location</h2>
                {locations.map((locationOption) => (
                  <div className="flex items-center mb-2" key={locationOption}>
                    <input
                      type="checkbox"
                      name={locationOption}
                      id={locationOption}
                      checked={location[locationOption]}
                      onChange={handleInputChange(location, setLocation)}
                      className="mr-2"
                    />
                    <label htmlFor={locationOption}>
                      {capitalizeFirstLetter(locationOption)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default SearchBar;
