import React from "react";
import styles from "./booklist.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Slidercomponent from "@/components/slidercomponent";
const Booklist = () => {
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
  ];
  return (
    <div className="container mx-auto px-3 pt-4 sm:pt-10">
      <section>
        <div>
          <div>
            <div className="sm:flex items-center justify-between pt-2">
              <div className="">
                <h2 className="text-xl font-serif font-bold">
                  Buylocalbooks.com
                </h2>
                <h6 className="flex items-center text-yellow-400 pt-1 font-semibold font-serif text-[13px]">
                  <span className="">
                    <img src="./images/location.svg" alt="icon" />
                  </span>
                  <span className="px-2 font-serif">Your Zip Code</span>
                </h6>
              </div>

              <div className="flex  sm:!pt-0 !pt-4">
                <div className="flex items-center border-2 border-gray-300 h-[50px] rounded-2xl pl-3">
                  <img
                    src="./images/search-iconn.svg"
                    alt="icon"
                    className="mx-[6px] h-4 w-4"
                  />
                  <input
                    type="text"
                    placeholder="Search Your Book"
                    className="text-[14px] focus:outline-none rounded-2xl w-[250px] mx-2 py-[16px]"
                  />
                </div>

                <div className="">
                  <button
                    type="button"
                    className="bg-sky-500  ml-2 rounded-2xl w-[50px] h-[50px] flex items-center justify-center border-2 border-black"
                  >
                    <img
                      src="./images/filter.svg"
                      alt="icon"
                      className="w-5 h-5 "
                    />
                  </button>
                </div>
              </div>
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
              <Slidercomponent />
            </div>

            <div className="pt-[30px]">
              <div className="col-12 ">
                <div className="flex justify-between">
                  <h4 className="text-base font-serif font-semibold">
                    Books Recently Bought
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
                          <img
                            src="./images/icons/recently-book1.svg"
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
            <div>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booklist;
