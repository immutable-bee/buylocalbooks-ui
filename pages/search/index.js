import React from "react";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { getSearchResults } from "../../services/blbn";
import { LocalStoresContext } from "../../context/LocalStoresContext";
import SearchBar from "../../components/SearchBar";

const search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { storeIds: contextStoreIds } = useContext(LocalStoresContext);
  const router = useRouter();

  // get search results

  useEffect(() => {
    if (contextStoreIds.length === 0) return;
    const { term, filter, local } = router.query;
    const localBool = local === "true";

    const searchArgs = {
      storeIds: contextStoreIds,
      searchTerm: term,
      filter,
      local: localBool,
    };

    const search = async () => {
      const { data } = await getSearchResults(searchArgs);
      setSearchResults(data);
    };
    search();
  }, [contextStoreIds, router.query]);

  var data = [
    {
      name: "Bookstore Seattle",
      email: "contact@shop1.com",
    },
    {
      name: "Bookstore Portland",
      email: "contact@store2.com",
    },
    {
      name: "Bookstore New York",
      email: "contact@shop3.com",
    },
  ];
  return (
    <div>
      <section>
        <div className="container mx-auto px-3 pt-10">
          <div>
            <div className="sm:flex items-center justify-between px-2 pt-2">
              <div className="">
                <h2 className="flex items-center">
                  <Link href="/">
                    <span className="">
                      <Image
                        src="./images/icons/back-arrow.svg"
                        width={24}
                        height={24}
                        alt="Picture of the author"
                      />
                    </span>
                  </Link>
                  <span className="mx-3 text-2xl font-bold">Buylocalbooks</span>
                </h2>

                <h6 className="flex items-center text-yellow-400 pt-1 font-semibold text-[13px]">
                  <span className="">
                    <Image
                      src="./images/location.svg"
                      width={10}
                      height={12}
                      alt="icon"
                    />
                  </span>
                  <span className="px-2">Your Zip Code</span>
                </h6>
              </div>
              <SearchBar />
            </div>

            <div className="border-2 text-center mx-auto border-black bg-gray-100 mb-0 rounded-3xl py-4 px-3 mt-4">
              <div>
                <Image
                  src="./images/icons/emoji_icon.svg"
                  width={29}
                  height={19}
                  alt="icon"
                  className="mx-auto mb-4"
                />
              </div>
              <div>
                <h6 className="font-bold">
                  No matches found for ‘Life of Pi’...
                </h6>
                <p className="text-xs pt-1 text-black">
                  These stores below would love to connect you with the book you
                  are seeking!
                </p>
                <p className="text-xs mb-0 text-black">
                  They will take in consideration of your budget and book
                  condition preferences.
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center pt-10">
                <div>
                  <h5 className="text-lg font-semibold">
                    Stores who have ‘Life of Pi’
                  </h5>
                </div>
                <div>
                  <h6 className="text-yellow-400 font-semibold">See All</h6>
                </div>
              </div>

              <div className="">
                {data.map((data, i) => {
                  return (
                    <div
                      key={data.email}
                      className="border border-gray-400 mb-3 rounded-2xl my-1 justify-between w-full flex items-center py-3 px-3"
                    >
                      <div className="flex items-start">
                        <div className="bg-sky-200 p-[12px] rounded-lg ">
                          <Image
                            src="./images/icons/stores-icon.svg"
                            width={23}
                            height={23}
                            alt="stores_icon"
                          />
                        </div>

                        <div className="mx-3 ">
                          <p className="my-2 mb-0 text-xs text-gray-500 font-semibold">
                            {data.name}
                          </p>
                          <h6 className="my-2 mb-0 text-sky-500 text-xs">
                            {data.email}
                          </h6>
                        </div>
                      </div>

                      <div className="flex items-center justify-end">
                        <div>
                          <button className="bg-yellow-400 mx-1 p-[12px] border border-black rounded-lg ">
                            <Image
                              src="./images/icons/black-attachment-icon.svg"
                              className="w-4"
                              width={17}
                              height={17}
                              alt="Attachment_icon"
                            />
                          </button>
                        </div>
                        <div>
                          <button className="bg-yellow-400 mx-1 p-[12px] border border-black rounded-lg ">
                            <Image
                              src="./images/icons/black-call-icon.svg"
                              className="w-4"
                              width={17}
                              height={17}
                              alt="call_icon"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default search;
