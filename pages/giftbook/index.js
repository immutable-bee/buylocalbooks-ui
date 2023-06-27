import React from "react";
import styles from "./giftbook.module.scss";
import Image from "next/image";
import Link from "next/link";
// import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
const giftbook = () => {
  return (
    <div className="container mx-auto px-3 pt-5">
      <div>
        <h2 className="flex items-center">
          <Link href="/">
            <span className="">
              <Image
                src="./images/icons/back-arrow.svg"
                alt="back_arrow"
                width={24}
                height={24}
              />
            </span>
          </Link>
          <span className="mx-3 text-2xl font-bold"> Gift a Book</span>
        </h2>
      </div>

      <div className="mt-4">
        <div>
          <h3 className="text-base font-semibold">Choose a gift option</h3>
        </div>

        <div className="flex flex-wrap mt-3">
          <div>
            <a>
              <div className="py-3 sm:h-[104px] h-[114px] p-[10px] flex bg-yellow-400 sm:rounded-2xl rounded-3xl items-start sm:w-[310px] sm::border border-2 border-black">
                <div className="mx-2 bg-yellow-300 rounded-lg px-[16px] py-[15px]">
                  <Image
                    src="./images/icons/profile-icon.svg"
                    width={18}
                    height={18}
                    alt="back_arrow"
                    className="w-6"
                  />
                </div>
                <div className="mx-2">
                  <h4 className="sm:text-xs text-lg font-bold mb-0">
                    To a friend
                  </h4>
                  <p className="text-xs  mb-0 my-1">
                    Purchase a book for a friend to pick up or deliver
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div>
            <a>
              <div className="py-3 sm:h-[104px] h-[114px] p-[10px] sm:mx-3 sm:!my-0 !my-5 flex bg-sky-500 sm:rounded-2xl rounded-3xl items-start sm:w-[310px] sm::border border-2 border-black">
                <div className="mx-2 bg-sky-300 rounded-lg px-[16px] py-[15px]">
                  <Image
                    src="./images/icons/pay-icon.svg"
                    width={18}
                    height={18}
                    alt="back_arrow"
                    className="w-14"
                  />
                </div>
                <div className="mx-2">
                  <h4 className="text-white hover:text-black sm:text-xs text-lg mb-0 font-bold">
                    Pay it forward
                  </h4>
                  <p className="text-white hover:text-black text-xs my-1 mb-0">
                    Purchase a book and the next person to request to buy the
                    book will receive the book free of charge.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default giftbook;
