import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import LocationDisplay from "../components/LocationDisplay";
import UserAvatar from "../components/UserAvatar";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <section className="container mx-auto px-3 sm:pt-10 pt-4">
        <div>
          <div>
            <div className="flex justify-between items-center">
              <div className=""></div>
              <UserAvatar avatarLink="/profile" />
            </div>

            <div className="sm:flex items-center justify-between px-2 pt-2">
              <div className="">
                <h2 className="text-2xl font-bold">Buylocalbooks.com</h2>
                <LocationDisplay />
              </div>

              <SearchBar placeholder="Search Here" />
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
            <div>
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
                stock, you can 'request to buy' the book for pick up or
                delivery.
              </p>
              <p className="text-gray-500 font-normal text-[13px] leading-6">
                If no bookstore has the book you are looking for, then place a
                'request a book' with the nearest bookstore to you and they will
                seek out the book on your behalf.
              </p>
              <Link
                href={"/booklist"}
                style={{ textDecoration: "none" }}
                className="text-black"
              >
                <button className=" duration-300 ease-in-out rounded-full w-full sm:w-[180px] my-2 sm:my-0 py-[12px] sm:py-[12px] border sm:border-2 border-black text-xs sm:text-sm mx-auto bg-yellow-400 text-black font-semibold hover:bg-white">
                  Browse Local Books
                </button>
              </Link>
            </div>
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
            <Link
              href={"https://www.buylocalbooksnetwork.com"}
              style={{ textDecoration: "none" }}
              className="text-black"
            >
              <button className=" duration-300 ease-in-out rounded-full w-full sm:w-[180px] my-2 sm:my-0 py-[12px] sm:py-[12px] border sm:border-2 border-black text-xs sm:text-sm mx-auto bg-yellow-400 text-black font-semibold hover:bg-white">
                Apply Now
              </button>
            </Link>
          </div>

          <div className="sm:flex text-center py-5 w-screen">
            <button className=" duration-300 ease-in-out rounded-full w-full sm:w-[180px] my-2 sm:my-0 py-[12px] sm:py-[12px] border sm:border-2 hover:!text-black hover:bg-white border-black text-xs sm:text-sm bg-sky-500 text-white font-semibold">
              Share this Page
            </button>
            <Link
              href={"/membership"}
              style={{ textDecoration: "none" }}
              className="text-black"
            >
              <button className="sm:ml-2 duration-300 ease-in-out rounded-full w-full sm:w-[180px] my-2 sm:my-0 py-[12px] sm:py-[12px] border sm:border-2 hover:!text-black hover:bg-white border-black text-xs sm:text-sm bg-yellow-400 font-semibold">
                Become a Member
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
