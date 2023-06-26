import React from "react";
import styles from "./membershipdetail.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
const membershipdetail = () => {
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
          <span className="mx-3 text-xl font-bold">Life of Pi</span>
        </h2>
      </div>

      <div className="pt-3 max-w-3xl w-full">
        <div>
          <h3 className="text-base font-bold">Author</h3>
          <div className="flex pt-1">
            <div className="bg-sky-50 rounded-2xl p-[28px]">
              <img
                src="./images/icons/stamp-icon.svg"
                alt="Picture of the author"
              />
            </div>
            <div className="px-3">
              <h5 className="text-sm font-medium">Yann Martel</h5>
              <p className="text-sm text-sky-500 font-semibold">Other books</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div>
              <h6 className="font-bold">Condition</h6>
              <button className="text-xs bg-green-300 font-semibold rounded-xl px-4 py-[10px] border border-black">
                New
              </button>
            </div>
            <div className="mx-24">
              <h6 className="font-bold">Format</h6>
              <button className="text-black text-sm font-semibold bg-gray-300 rounded-xl px-4 py-[10px] border border-black">
                HandCover
              </button>
            </div>
          </div>
          <div className="my-4">
            <h1 className="font-semibold flex sm:justify-start justify-between text-base">
              <span>Price</span>

              <span className="text-sky-400 font-bold mx-24">$10.99</span>
            </h1>
          </div>
        </div>

        <div>
          <h3 className="pt-4 text-base font-bold">Bookstore Details</h3>
          <div className="flex">
            <div className="pr-2">
              <img
                src="./images/icons/bookstore-img.svg"
                alt="books_img"
                className=""
              />
            </div>
            <div className="px-2">
              <h5 className="text-sm font-semibold mb-0">Yann Martel</h5>
              <label className="text-sm text-gray-400 py-2">Washington</label>
              <p className="flex text-sm text-sky-500 mb-2">
                <img
                  src="./images/icons/call-icon.svg"
                  alt="call_icon"
                  className="px-1"
                />
                <span className="px-1 font-semibold">(603) 555-0123</span>
              </p>

              <p className="flex text-sm text-sky-500">
                <img
                  src="./images/icons/attachment-icon.svg"
                  alt="call_icon"
                  className="px-1"
                />
                <span className="px-1 font-semibold">bookstoreseattle.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex sm:justify-start justify-center  mt-20">
          <div>
            <button className="mr-4 text-sm sm:my-0 my-2 bg-sky-400 text-white rounded-full font-bold sm:!w-auto w-36  sm:px-[36px] py-[10px] border border-black">
              Gift
            </button>
          </div>
          <div className="sm:mx-6">
            <button className="text-sm sm:my-0 my-2 text-gray-800 bg-yellow-400 rounded-full  font-bold sm:w-auto w-44 sm:px-[36px] py-[10px] border border-black">
              Request To Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default membershipdetail;
