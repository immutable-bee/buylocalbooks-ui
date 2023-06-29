import Image from 'next/image';

const SearchBar = ({ onSearchChange }) => {
    const handleSearchChange = (event) => {
        onSearchChange && onSearchChange(event.target.value);
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
                <input
                    type="text"
                    placeholder="Search Local Books"
                    className="text-[14px] focus:outline-none rounded-2xl w-[250px] mx-2 "
                    onChange={handleSearchChange}
                />
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
