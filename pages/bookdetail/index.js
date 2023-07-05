import React from "react";
import styles from "./bookdetail.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

// TODO: this page and membershipdetail page will be folded into one page "/listingdetail", page will only be accessed using query param "id" - E.G.  "/listingdetail?id={prisma.listing.id}" the page will utilize the BookDetailView component. When a user clicks a book the prisma id for the book will be passed to /detail as a query param. The page will then use the id to query the prisma db for the book details and render the BookDetailView component with the data.
const Bookdetail = () => {
  return (
    <div className="container mx-auto px-3">
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
          <span className="mx-3 text-2xl font-bold">Life of Pi</span>
        </h2>
      </div>

      <div className="pt-3 max-w-3xl w-full flex-wrap flex items-start justify-between">
        <div>
          <h3 className="text-base font-bold">Author</h3>
          <div className="flex pt-[6px]">
            <div className="bg-sky-50 rounded-2xl p-[26px]">
              <Image
                src="./images/icons/stamp-icon.svg"
                width={51}
                height={51}
                alt="Picture of the author"
              />
            </div>
            <div className="px-3">
              <h5 className="text-sm font-semibold">Yann Martel</h5>
              <p className="text-sm text-sky-500 font-semibold">Other books</p>
            </div>
          </div>
        </div>

        <div className="sm:!mt-0 !mt-7">
          <h3 className=" sm:!pt-0 !pt-3 text-[16px] font-semibold">
            Bookstore Details
          </h3>
          <div className="flex pt-[6px]">
            <div className="pr-2">
              <Image
                width={102}
                height={102}
                src="./images/icons/bookstore-img.svg"
                alt="books_Image"
                className=""
              />
            </div>
            <div className="px-2">
              <h5 className="text-sm  my-1 font-semibold mb-0">Yann Martel</h5>
              <label className="text-sm font-semibold sm:my-2 text-gray-400 mb-0 my-2">
                Washington
              </label>
              <p className="flex text-sm text-sky-500 font-semibold my-1 mb-0 ">
                <Image
                  src="./images/icons/call-icon.svg"
                  width={15}
                  height={15}
                  alt="call_icon"
                  className="pr-2"
                />
                <span className=" mb-0">(603) 555-0123</span>
              </p>

              <p className="font-normal flex text-sm text-sky-500 my-2 mb-0">
                <Image
                  src="./images/icons/attachment-icon.svg"
                  width={15}
                  height={15}
                  alt="call_icon"
                  className="pr-2 "
                />
                <span className=" mb-0 font-semibold ">
                  bookstoreseattle.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:max-w-[390px] w-full">
        <div>
          <div className="sm:mt-40 mt-20">
            <p className="text-center text-gray-400 text-[14px] sm:!text-[13px] leading-6">
              Inquire with the bookstore for more details or become a member to
              access all books details at a click of a button!
            </p>
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
  );
};

export default Bookdetail;
