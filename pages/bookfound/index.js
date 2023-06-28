import React from "react";
import styles from "./bookfound.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "../../components/SearchBar";
const Bookfound = () => {
  var data = [
    {
      head: "Life of Pi",
      para: "Bookstore NYC",
    },
    {
      head: "The Lost Symbol",
      para: "Bookstore Boston",
    },
    {
      head: "The Alchemist",
      para: "Bookstore Seattle",
    },
    {
      head: "The Alchemist",
      para: "Bookstore Seattle",
    },
    {
      head: "The Alchemist",
      para: "Bookstore Seattle",
    },
    {
      head: "The Alchemist",
      para: "Bookstore Seattle",
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
                    <span className="mx-3 text-2xl font-bold">Buylocalbooks</span>
                  </h2>
                </div>
                {/* <h6 className="flex items-center text-yellow-400 pt-1 font-semibold font-serif text-[13px]">
                  <span className="">
                    <Image src="./images/location.svg" alt="icon" width={10}
                      height={12} />
                  </span>
                  <span className="px-2 font-serif">Your Zip Code</span>
                </h6> */}
                <div class="flex items-center border-2 border-gray-300 py-2 h-[50px] rounded-2xl pl-3">
                <Image src="./images/location.svg" alt="icon" width={14}
                      height={16} />
                  {/* <img alt="icon" loading="lazy" width="15" height="14" decoding="async" data-nimg="1" class="mx-[6px] h-4 w-4" style="color:transparent" src="./images/search-iconn.svg"> */}
                    <input type="text" placeholder="Your Zip Code" class="text-[14px] focus:outline-none rounded-2xl w-[250px] mx-2 py-2" /></div>
              </div>

              <SearchBar placeholder="Search Here" />
            </div>

        
         

            <div className="pt-[30px]">
              <div className="col-12 ">
                <div className="flex justify-between">
                  <h4 className="text-base font-serif font-semibold">
                    Results
                  </h4>
                  <h6 className="text-yellow-400 font-semibold text-xs font-serif">
                    See All
                  </h6>
                </div>
              </div>
              <div className="grid sm:grid-cols-3">
                {data.map((data, i) => {
                  return (
                    <div>
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
                            {data.head}
                          </h6>
                          <p className="m-0 font-serif text-xs text-gray-400 pt-1">
                            {data.para}
                          </p>
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

export default Bookfound;
