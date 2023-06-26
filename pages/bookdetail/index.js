import React from "react";
import styles from "./bookdetail.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
const Bookdetail = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="pt-10">
        <h2 className="flex items-center">
          <Link href="/">
            <span className="">
              <img
                src="./images/icons/back-arrow.svg"
                alt="Picture of the author"
              />
            </span>
          </Link>
          <span className="mx-3 text-[22px] font-bold">Life of Pi</span>
        </h2>
      </div>

      <div className="pt-3 max-w-3xl w-full flex-wrap flex items-start justify-between">
        <div>
          <h3 className="text-base font-bold">Author</h3>
          <div className="flex pt-[6px]">
            <div className="bg-sky-50 rounded-2xl p-[26px]">
              <img
                src="./images/icons/stamp-icon.svg"
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
              <img
                src="./images/icons/bookstore-img.svg"
                alt="books_img"
                className=""
              />
            </div>
            <div className="px-2">
              <h5 className="text-sm  my-1 font-semibold mb-0">Yann Martel</h5>
              <label className="text-sm font-semibold sm:my-2 text-gray-400 mb-0 my-2">
                Washington
              </label>
              <p className="flex text-sm text-sky-500 font-semibold my-1 mb-0 ">
                <img
                  src="./images/icons/call-icon.svg"
                  alt="call_icon"
                  className="pr-2"
                />
                <span className=" mb-0">(603) 555-0123</span>
              </p>

              <p className="font-normal flex text-sm text-sky-500 my-2 mb-0">
                <img
                  src="./images/icons/attachment-icon.svg"
                  alt="call_icon"
                  className="pr-2 "
                />
                <span className=" mb-0 font-semibold ">bookstoreseattle.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:max-w-[390px] w-full">
        <div>
          <div className="mt-40">
            <p className="text-center text-gray-400 text-[14px] sm:!text-[13px] leading-6">
              Inquire with the bookstore for more details or become a member to
              access all books details at a click of a button!
            </p>
          </div>
        </div>

        <div>
          <div className="mt-8">
            <div className="border border-black rounded-3xl w-80 bg-yellow-400 py-3 sm:mx-0 mx-auto">
              <Link href="" className="no-underline">
                <h5 className=" text-center text-base text-black font-semibold">
                  Become a Member
                </h5>
                <p className="text-xs text-center text-gray-800 mb-0">
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
