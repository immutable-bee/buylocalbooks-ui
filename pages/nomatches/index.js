import React from "react";
import styles from "./nomatches.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
const nomatches = () => {
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
                <h2 className="text-2xl font-bold">Buylocalbooks.com</h2>
                <h6 className="flex items-center text-yellow-400 pt-1 font-semibold text-[16px]">
                  <span className="">
                    <img src="./images/location.svg" alt="icon" />
                  </span>
                  <span className="px-2 text-sm font-bold">Your Zip Code</span>
                </h6>
              </div>

              <div className="flex items-center sm:!mt-0 !mt-5">
                <div className="flex items-center border border-gray-300 rounded-2xl h-[50px] pl-3">
                  <img
                    src="./images/search-iconn.svg"
                    alt="icon"
                    className="mx-[6px] h-4 w-4"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-[14px] focus:outline-none rounded-2xl mx-2 w-[250px] py-[16px]"
                  />
                </div>

                <button
                  type="button"
                  className="bg-sky-500  ml-2 rounded-2xl w-[50px] h-[50px] flex items-center justify-center border-2 border-black"
                >
                  <img
                    src="./images/filter.svg"
                    alt="icon"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </div>

            <div className="border-2 text-center mx-auto border-black bg-gray-100 mb-0 rounded-3xl py-4 px-3 mt-4">
              <div>
                <img
                  src="./images/icons/emoji_icon.svg"
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
                  <div className="border border-gray-400 mb-3 rounded-2xl my-1 justify-between w-full flex items-center py-3 px-3">
                    <div className="flex items-start">
                      <div className="bg-sky-200 p-[12px] rounded-lg ">
                        <img
                          src="./images/icons/stores-icon.svg"
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
                          <img
                            src="./images/icons/black-attachment-icon.svg"
                            className="w-4"
                            alt="Attachment_icon"
                          />
                        </button>
                      </div>
                      <div>
                        <button className="bg-yellow-400 mx-1 p-[12px] border border-black rounded-lg ">
                          <img
                            src="./images/icons/black-call-icon.svg"
                            className="w-4"
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

export default nomatches;
