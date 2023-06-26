import React from "react";
import styles from "./member.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
const Member = () => {
  return (
    <div>
      <div className="bg-yellow-400 h-40 px-16 pt-10">
        <div className="">
          <Link href="/">
            <img src="./images/icons/arrow-back-btn.svg" alt="icon" />
          </Link>
        </div>
      </div>
      <div className="rounded-2xl">
        <div className="!max-w-xs relative text-center  mx-auto">
          <div className="-mt-[67px] ">
            <div>
              <img
                src="./images/icons/greene-img.svg"
                className="mx-auto"
                alt="icon"
              />
            </div>
            <div className="flex absolute right-0 top-24 justify-center !border !border-gray-400 rounded-xl p-2">
              <Link href="">
                <img
                  src="./images/icons/edit-btn.svg"
                  alt="icon"
                  className="p-1"
                />
              </Link>
            </div>
          </div>
          <div className="pt-4">
            <h4 className="font-semibold">Lea Greene</h4>
            <p className="text-sky-500 font-normal mb-0">leagreene@gmail.com</p>
            <label>
              <span>
                <img src="./images/icons/black-location-icon.svg" alt="icon" />
              </span>
              <span className="text-gray-500">Washington</span>
            </label>
          </div>
          <div className="flex justify-center pt-6">
            <div className="border border-black py-[14px] mx-2 bg-yellow-400 rounded-2xl w-32">
              <h6 className="font-semibold">128</h6>
              <p className="text-xs mb-0">Books purchased</p>
            </div>
            <div className="border border-black py-[14px] mx-2 bg-sky-500 text-white rounded-2xl w-32">
              <h6 className="font-semibold">51</h6>
              <p className="text-xs mb-0">Books Gifted</p>
            </div>
          </div>
          <div className="pt-6">
            <div>
              <h3 className="text-sm font-semibold">Location preferences</h3>
            </div>
            <div className="flex justify-center mt-3">
              <div>
                <button className="border border-black  mx-1 text-[13px] bg-sky-500 font-semibold rounded-full py-[17px] flex px-[29px]">
                  <span>
                    <img
                      src="./images/icons/server-icon.svg"
                      alt="icon"
                      className="px-2"
                    />
                  </span>
                  <span className="text-white"> National</span>
                </button>
              </div>
              <div>
                <button className="border border-gray-300  mx-1 bg-white rounded-full py-[17px] items-center flex text-[13px] font-bold text-black px-[29px]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 mx-2 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                  By State
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="" className="no-underline">
              <button className="border border-black  mx-1 bg-yellow-400 text-gray-700 !font-bold text-sm mt-8 rounded-full py-[16px] flex px-[32px]">
                Share BuyLocalBooks.com
              </button>
            </Link>
          </div>
          <div className="my-8">
            <Link
              href=""
              className="no-underline text-sm flex justify-center text-gray-400 items-center mt-12"
            >
              <span className="mx-2 ">
                <img src="./images/icons/logout-icon.svg" alt="icon" />
              </span>
              <span className="mx-2"> Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
