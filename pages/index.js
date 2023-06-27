import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import LocationDisplay from "../components/LocationDisplay";
const Home = () => {
  return (
    <>
      <section className="container mx-auto px-3 sm:pt-10 pt-4">
        <div>
          <div>
            <div className="">
              <Link href="/bookdetail">
                <button className="mx-2 text-sm text-blue-600 underline">
                  Book Detail
                </button>
              </Link>
              <Link href="/bookstoredetail">
                <button className="mx-2 text-sm text-blue-600 underline">
                  Bookstore Detail
                </button>
              </Link>

              <Link href="/booklist">
                <button className="mx-2 text-sm text-blue-600 underline">
                  Book List
                </button>
              </Link>

              <Link href="/buyrequest">
                <button className="mx-2 text-sm text-blue-600 underline">
                  Buy Request
                </button>
              </Link>

              <Link href="/giftbook">
                <button className="mx-2 text-sm text-blue-600 underline">
                  Gift Book
                </button>
              </Link>

              <Link href="/membarshipoption">
                <button className="mx-2 text-sm text-blue-600 underline">
                  Membership Options
                </button>
              </Link>

              <Link href="/member">
                <button className="mx-2 text-sm text-blue-600 underline">
                  Member
                </button>
              </Link>

              <Link href="/membershipdetail">
                <button className="mx-2 text-sm text-blue-600 underline">
                  Membership View
                </button>
              </Link>

              <Link href="/nomatches">
                <button className="mx-2 text-sm text-blue-600 underline">
                  No Search Results
                </button>
              </Link>

              <Link href="/payforward">
                <button className="mx-2 text-sm text-blue-600 underline">
                  Pay Forward
                </button>
              </Link>

              <Link href="/tofriend">
                <button className="mx-2 text-sm text-blue-600 underline">
                  To Friend
                </button>
              </Link>
            </div>

            <div className="sm:flex items-center justify-between px-2 pt-2">
              <div className="">
                <h2 className="text-2xl font-bold">Buylocalbooks.com</h2>
                <LocationDisplay />
              </div>

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
                    placeholder="Search Your Book"
                    className="text-[14px] focus:outline-none rounded-2xl w-[250px] mx-2 "
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
            </div>
          </div>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center pt-10">
          <div className="py-3 px-4 w-full sm:w-64 shadow rounded sm:mr-4 my-2">
            <h6 className="flex items-center">
              <span>
                <Image
                  src="./images/message-icon.svg"
                  width={14}
                  height={14}
                  alt="icon"
                  className="w-4"
                />
              </span>
              <span className="px-2 font-bold text-sm">
                {" "}
                What is buy local books
              </span>
            </h6>
            <p className="text-gray-500 font-normal text-[13px] leading-6">
              A community driven eccommerce bookstore for readers who value
              supporting book businesses and keeping local dollars local.
            </p>
            <p className="text-gray-500 font-normal text-[13px] leading-6">
              This is not a bargain online bookstore, rather this is a
              marketplace for bookstores selling their book to readers who
              appreciate books and quality service.
            </p>
          </div>
          <div className="py-3 px-4 w-full sm:w-64 shadow rounded sm:mr-4 my-2">
            <h6 className="flex items-center">
              <span>
                <Image
                  src="./images/book-icon.svg"
                  alt="icon"
                  className="w-4"
                  width={14}
                  height={14}
                />
              </span>
              <span className="px-2 font-bold text-sm">
                How do you buy books?
              </span>
            </h6>
            <p className="text-gray-500 font-normal text-[13px] leading-6">
              Search for your desired book and if a bookstore has the book in
              stock, you can 'request to buy' the book for pick up or delivery.
            </p>
            <p className="text-gray-500 font-normal text-[13px] leading-6">
              If no bookstore has the book you are looking for, then place a
              'request a book' with the nearest bookstore to you and they will
              seek out the book on your behalf.
            </p>
          </div>
          <div className="py-3 px-4 w-full sm:w-64 shadow rounded sm:mr-4 my-2 flex flex-col justify-between">
            <div>
              <h6 className="flex items-center">
                <span>
                  <Image
                    width={14}
                    height={14}
                    src="./images/home.svg"
                    alt="icon"
                    className="w-4"
                  />
                </span>
                <span className="px-2 font-bold text-sm">
                  {" "}
                  Do you own bookstore?
                </span>
              </h6>
              <p className="text-gray-500 font-normal text-[13px] leading-6">
                Apply to become a member of the booksellers network to reach
                more aspiring readers that are community driven.
              </p>
            </div>
            <button className=" duration-300 ease-in-out rounded-full w-full sm:w-[180px] my-2 sm:my-0 py-[12px] sm:py-[12px] border sm:border-2 border-black text-xs sm:text-sm mx-auto bg-yellow-400 text-black font-semibold hover:bg-white">
              Apply Now
            </button>
          </div>

          <div className="sm:flex text-center py-5 w-screen">
            <button className=" duration-300 ease-in-out rounded-full w-full sm:w-[180px] my-2 sm:my-0 py-[12px] sm:py-[12px] border sm:border-2 hover:!text-black hover:bg-white border-black text-xs sm:text-sm bg-sky-500 text-white font-semibold">
              Share this Page
            </button>
            <button className="sm:ml-2 duration-300 ease-in-out rounded-full w-full sm:w-[180px] my-2 sm:my-0 py-[12px] sm:py-[12px] border sm:border-2 hover:!text-black hover:bg-white border-black text-xs sm:text-sm bg-yellow-400 font-semibold">
              Become a Member
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
