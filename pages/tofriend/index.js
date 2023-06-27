import React, { useState } from "react";
import styles from "./tofriend.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
const Tofriend = () => {
  const [isFriendSelected, setFriendSelected] = useState(true);
  const [isPickupSelected, setPickupSelected] = useState(true);

  return (
    <div className="container mx-auto pl-3 pt-10">
      <div>
        <h2 className="flex items-center">
          <Link href="/">
            <span>
              <Image
                src="./images/icons/back-arrow.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </span>
          </Link>
          <span className="mx-3 text-2xl font-semibold">Gift a Book</span>
        </h2>
      </div>

      <div>
        <div className="pt-3">
          <h3 className=" text-base font-semibold flex items-center">
            Gift Options
            <span className="ml-2">
              <Image
                src="./images/icons/important-icon.svg"
                width={15}
                height={15}
                alt="back_arrow"
              />
            </span>
          </h3>
        </div>

        <div className="sm:flex pt-2">
          <div>
            <label className="w-full">
              <input type="radio" name="radio" className="sr-only" />

              <div className="ml-2">
                <button
                  className={` font-bold rounded-full flex justify-center w-full sm:!w-44 text-[13px] py-3 border  border-black ${
                    isFriendSelected
                      ? "bg-sky-500 border border-black text-white"
                      : "border-gray-700 border text-gray-800"
                  }`}
                  onClick={() => setFriendSelected(true)}
                >
                  <span className="mx-1 text-gray-600">
                    <Image
                      src="./images/icons/white-user-icon.svg"
                      width={16}
                      height={16}
                      alt="icon"
                    />
                  </span>
                  <span className="mx-1 text-sm sm:text-xs">To a friend</span>
                </button>
              </div>
            </label>
          </div>

          <div>
            <label className="w-full">
              <input type="radio" name="radio" className="sr-only" />

              <div className="ml-2 sm:!my-0 !my-4">
                <button
                  className={` font-bold rounded-full flex justify-center w-full sm:!w-44 text-[13px] py-3  ${
                    isFriendSelected
                      ? "border-gray-700 border text-gray-800"
                      : "bg-sky-500 border border-black text-white"
                  }`}
                  onClick={() => setFriendSelected(false)}
                >
                  {/* <span className="mx-1 text-gray-600">
                          <img
                            src="./images/icons/light-pay-icon.svg"
                            alt="icon"
                          />
                        </span> */}
                  <span className="mx-1 text-sm sm:text-xs">
                    Pay It Forword
                  </span>
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div>
          <h4 className="text-base font-bold">
            Your Friend's contact information
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex !border !border-gray-400 rounded-xl mr-3 my-2 pl-3 w-full">
            <Image
              src="./images/icons/user-icon.svg"
              alt="icon"
              width={15}
              height={14}
              className="mx-[6px]"
            />
            <input
              type="text"
              placeholder="Your friend Name"
              className=" placeholder-gray-700 text-[14px] px-[6px] focus:outline-none rounded-xl py-[16px] w-full"
            />
          </div>

          <div className="flex !border !border-gray-400 rounded-xl mr-3 my-2 pl-3 w-full">
            <Image
              src="./images/icons/call-icon.svg"
              width={15}
              height={14}
              className="img-fluid"
              alt="icon"
            />
            <input
              type="text"
              placeholder="Your friend phone number"
              className=" placeholder-gray-700 text-[14px] px-[6px] focus:outline-none rounded-xl py-[16px] w-full"
            />
          </div>

          <div className="flex !border !border-gray-400 rounded-xl mr-3 my-2 py-1 pl-3 w-full">
            <Image
              src="./images/icons/email-icon.svg"
              width={15}
              height={14}
              className="img-fluid"
              alt="icon"
            />
            <input
              type="text"
              placeholder="Your friend Email"
              className=" placeholder-gray-700 text-[14px] px-[6px] focus:outline-none rounded-xl py-[12px] w-full"
            />
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div>
          <h4 className="text-base font-bold">Your Payment Information</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex !border !border-gray-400 rounded-xl mr-3 my-2 pl-3 py-1 w-full">
            <Image
              src="./images/icons/user-icon.svg"
              width={15}
              height={14}
              alt="icon"
              className="mx-[6px]"
            />
            <input
              type="text"
              placeholder="CardHolder Home"
              className=" placeholder-gray-700 text-[14px] px-[6px] focus:outline-none rounded-xl py-[12px] w-full"
            />
          </div>

          <div className="flex !border !border-gray-400 rounded-xl mr-3 py-1 my-2 pl-3 w-full">
            <Image
              src="./images/icons/aadhar-icon.svg"
              width={15}
              height={14}
              alt="icon"
              className="mx-[6px]"
            />
            <input
              type="text"
              placeholder="Card Number"
              className=" placeholder-gray-700 text-[14px] px-[6px] focus:outline-none rounded-xl py-[12px] w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex !border !border-gray-400 rounded-xl mr-3 my-2 pl-3 py-1 w-full">
              <img
                src="./images/icons/calender.svg"
                width={15}
                height={14}
                alt="icon"
                className="mx-[6px]"
              />
              <input
                type="text"
                placeholder="Expiracy"
                className=" placeholder-gray-700 text-[14px] px-[6px] rounded-xl focus:outline-none py-[12px] w-full"
              />
            </div>

            <div className="flex !border !border-gray-400 rounded-xl mr-3 my-2 py-1 pl-3  w-full">
              <Image
                src="./images/icons/hash-icon.svg"
                width={15}
                height={14}
                alt="icon"
                className="mx-[6px]"
              />
              <input
                type="text"
                placeholder="CVV"
                className=" placeholder-gray-700 text-[14px] px-[6px] rounded-xl w-full focus:outline-none py-[12px]"
              />
            </div>
          </div>
        </div>
      </div>

    

      <div className="pt-8">
        <div>
          <h4 className="text-base font-bold">Pick up or Delivery</h4>
        </div>
        <div className="sm:flex mt-3">
          <div className="">
            <label className="w-full">
              <input type="radio" name="radio" className="sr-only" />

              <div className="">
                <button
                  className={` font-bold rounded-full flex !w-full sm:!w-32 justify-center text-[13px] py-3 ${
                    isPickupSelected
                      ? "bg-sky-500 border border-black text-white"
                      : "border-gray-700 border text-gray-800"
                  }`}
                  onClick={() => setPickupSelected(true)}
                >
                  <span className="mx-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </span>
                  <span className="mx-1 sm:text-[13px] ">Pickup</span>
                </button>
              </div>
            </label>
          </div>

          <div>
            <label className="w-full">
              <input type="radio" name="radio" className="sr-only" />

              <div className="ml-2 sm:!my-0 !my-4">
                <button
                  className={` font-bold rounded-full flex !w-full sm:!w-32 justify-center text-[13px] py-3 ${
                    isPickupSelected
                      ? "border-gray-500 border"
                      : "bg-sky-500 border border-black text-white"
                  }`}
                  onClick={() => setPickupSelected(false)}
                >
                  {/* <span className="mx-1 text-gray-600">
                          <img
                            src="./images/icons/light-pay-icon.svg"
                            alt="icon"
                          />
                        </span> */}
                  <span className="mx-1 text-sm sm:text-xs">Delivery</span>
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h6 className="font-bold">Note</h6>
        <div className="flex mt-3 py-1 !border !border-gray-400 !border-solid rounded-xl mr-6 my-3 w-full sm:w-[450px] pl-3">
          <Image
            src="./images/icons/blue-message-icon.svg"
            width={15}
            height={14}
            alt="icon"
            className="mx-[6px]"
          />
          <input
            type="text"
            placeholder="Add a note"
            className="text-[14px] px-[6px] focus:outline-none rounded-xl py-[12px] placeholder-gray-700  w-full"
          />
        </div>
      </div>

      <div className="mt-10">
        <div>
          <input
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
            className=" placeholder-gray-700 text-blue-500 bg-blue-500 fill-blue-500"
          />
          <label className="mx-2" for="flexCheckChecked">
            <span className="px-1 text-gray-500"> I agree to the</span>
            <Link href="" className="px-1 no-underline text-sky-400">
              Terms and Conditions
            </Link>
          </label>
        </div>

        <div className="my-10 sm:!justify-start !justify-center flex">
          <button className="bg-yellow-400 text-gray-800 text-sm font-semibold  rounded-full flex px-32 sm:px-[80px] hover:bg-white py-3 border border-black">
            Gift Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tofriend;
