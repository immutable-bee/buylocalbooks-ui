import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const BookDetailView = ({ book, store, isMember }) => {
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
          <span className="mx-3 text-2xl font-bold">{book.title}</span>
        </h2>
      </div>

      <div className="pt-3 max-w-3xl w-full">
        <div>
          <h3 className="text-base font-bold">Author</h3>
          <div className="flex pt-1">
            <div className="bg-sky-50 rounded-2xl p-[28px]">
              <Image
                src="./images/icons/stamp-icon.svg"
                width={51}
                height={51}
                alt="Picture of the author"
              />
            </div>
            <div className="px-3">
              <Link
                href={`/search?term=${encodeURIComponent(
                  book.author
                )}&filter=author`}
              >
                <h5 className="text-sm font-medium">{book.author}</h5>
                <a className="text-sm text-sky-500 font-semibold">
                  Other books
                </a>
              </Link>
            </div>
          </div>
          {isMember ? (
            <>
              <div className="flex mt-10">
                <div>
                  <h6 className="font-bold">Condition</h6>
                  <button className="text-xs bg-green-300 font-semibold rounded-xl px-4 py-[10px] border border-black">
                    {book.condition}
                  </button>
                </div>
                <div className="mx-24">
                  <h6 className="font-bold">Format</h6>
                  <button className="text-black text-sm font-semibold bg-gray-300 rounded-xl px-4 py-[10px] border border-black">
                    {book.format}
                  </button>
                </div>
              </div>
              <div className="my-4">
                <h1 className="font-semibold flex sm:justify-start justify-between text-base">
                  <span>Price</span>

                  <span className="text-sky-400 font-bold mx-24">
                    {book.price}
                  </span>
                </h1>
              </div>
            </>
          ) : null}
        </div>

        <div>
          <h3 className="pt-4 text-base font-bold">Bookstore Details</h3>
          <div className="flex">
            <div className="pr-2">
              <Image
                src="./images/icons/bookstore-img.svg"
                width={102}
                height={102}
                alt="books_img"
                className=""
              />
            </div>
            <div className="px-2">
              <h5 className="text-sm font-semibold mb-0">Yann Martel</h5>
              <label className="text-sm text-gray-400 py-2">Washington</label>
              <p className="flex text-sm text-sky-500 mb-2">
                <Image
                  src="./images/icons/call-icon.svg"
                  alt="call_icon"
                  width={15}
                  height={15}
                  className="px-1"
                />
                <span className="px-1 font-semibold">(603) 555-0123</span>
              </p>

              <p className="flex text-sm text-sky-500">
                <Image
                  src="./images/icons/attachment-icon.svg"
                  width={15}
                  height={15}
                  alt="call_icon"
                  className="px-1"
                />
                <span className="px-1 font-semibold">bookstoreseattle.com</span>
              </p>
            </div>
          </div>
        </div>

        {isMember ? (
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
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default BookDetailView;
