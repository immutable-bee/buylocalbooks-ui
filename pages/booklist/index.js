import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Slidercomponent from "@/components/slidercomponent";
import SearchBar from "../../components/SearchBar";
import { useContext, useState } from "react";
import { LocalStoresContext } from "../../context/LocalStoresContext";
import LocationDisplay from "../../components/LocationDisplay";
import { set } from "date-fns";

const Booklist = () => {
  const { localStores, newListings } = useContext(LocalStoresContext);
  const [bookstoresNearYou, setBookstoresNearYou] = useState([]);
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    if (localStores) {
      setBookstoresNearYou(localStores);
      setNewBooks(newListings);
    }
  }, [localStores]);

  var data = [
    {
      title: "Life of Pi",
      owner: { business_name: "Bookstore NYC" },
      id: 1,
    },
    {
      title: "The Lost Symbol",
      owner: { business_name: "Bookstore Boston" },
      id: 2,
    },
    {
      title: "The Alchemist",
      owner: { business_name: "Bookstore Seattle" },
      id: 3,
    },
  ];
  return (
    <div className="container mx-auto px-3  sm:pt-10">
      <section>
        <div>
          <div>
            <div className="sm:flex items-center justify-between sm:pt-2">
              <div className="">
                <div className="pt-10">
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
                    <span className="mx-3 text-2xl font-bold">
                      Buylocalbooks
                    </span>
                  </h2>
                </div>
                <LocationDisplay />
              </div>

              <SearchBar placeholder="Search Here" />
            </div>

            <div className="flex justify-between items-center mt-10 mb-0 pb-3">
              <div>
                <h5 className="text-base font-serif font-semibold mb-0">
                  Bookstores Near You
                </h5>
              </div>

              <div>
                <h6 className="text-yellow-400 font-semibold text-xs font-serif mb-0">
                  See All
                </h6>
              </div>
            </div>
            <div>
              <Slidercomponent storesNearYou={bookstoresNearYou} />
            </div>

            <div className="pt-[30px]">
              <div className="col-12 ">
                <div className="flex justify-between">
                  <h4 className="text-base font-serif font-semibold">
                    Newly Added
                  </h4>
                  <h6 className="text-yellow-400 font-semibold text-xs font-serif">
                    See All
                  </h6>
                </div>
              </div>
              <div className="grid sm:grid-cols-3">
                {(newBooks || data).map((data, i) => {
                  return (
                    <div key={data.id}>
                      <Link
                        href={`/listingdetail?id=${data.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="flex border border-gray-400 rounded-2xl px-3 mr-3 my-2 py-3">
                          <div className="p-[12px] bg-sky-200 mb-0 rounded-lg ">
                            <Image
                              src="./images/icons/recently-book1.svg"
                              width={23}
                              height={23}
                              alt="icon"
                            />
                          </div>
                          <div className="px-3">
                            <h6 className="font-serif text-xs text-gray-600">
                              {data.title.length < 30
                                ? data.title
                                : data.title.slice(0, 30) + "..."}
                            </h6>
                            <p className="m-0 font-serif text-xs text-gray-400 pt-1">
                              {data.owner.business_name}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="my-8">
                <div className="border border-black rounded-2xl w-80 sm:!mx-0 !mx-auto bg-yellow-400 py-[18px] ">
                  <Link href="" className="no-underline">
                    <h5 className="font-serif no-underline text-center text-xs text-black font-semibold">
                      Become a Member
                    </h5>
                    <p className="font-serif no-underline text-xs mb-0 text-center pt-1 text-black">
                      Discover format, notes, price and more!
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booklist;
