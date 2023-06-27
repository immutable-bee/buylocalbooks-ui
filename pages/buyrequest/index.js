import React, { useState } from "react";
import styles from "./buyrequest.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
const Buyrequest = () => {
  const [isPickupSelected, setPickupSelected] = useState(true);
  return (
    <div className="container mx-auto px-3 pt-10">
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
          <span className="mx-3 text-2xl font-bold"> Request to Buy</span>
        </h2>
      </div>

      <div className="mt-4">
        <div>
          <h4 className="text-base font-semibold">Your Contact Information</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 mt-3 gap-3">
          <div className="flex !border !border-gray-500 rounded-xl py-1 px-3 w-full">
            <Image
              src="./images/icons/user-icon.svg"
              width={15}
              height={14}
              alt="icon"
              className="mx-[6px]"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[12px]"
            />
          </div>

          <div className="flex !border !border-gray-500 rounded-xl py-1 px-3 w-full">
            <Image
              src="./images/icons/email-icon.svg"
              width={15}
              height={14}
              alt="icon"
              className="mx-[6px]"
            />
            <input
              type="text"
              placeholder="Your Email"

              className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[12px]"
            />
          </div>

          <div className="flex !border !border-gray-500 rounded-xl  py-1 px-3 w-full ">
            <Image
              src="./images/icons/call-icon.svg"
              width={15}
              height={14}
              alt="icon"
              className="mx-[6px]"
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[12px]"
            />
          </div>
        </div>
      </div>

      <div className="pt-14">
        <div>
          <h4 className="text-lg font-semibold">Your Payment Information</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 mt-3 gap-3">
          <div className="flex !border !border-gray-500 rounded-xl py-1 px-3 w-full">
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
              className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[12px]"
            />
          </div>

          <div className="flex !border !border-gray-500 rounded-xl py-1 px-3 w-full">
            <Image
              src="./images/icons/aadhar-icon.svg"
              alt="icon"
              width={15}
              height={14}
              className="mx-[6px]"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[12px]"
            />
          </div>
          <div className="grid grid-cols-2 !sm:mt-0  gap-3">
            <div className="flex !border !border-gray-500 rounded-xl py-1 px-3 w-full">
              <Image
                src="./images/icons/calender.svg"
                alt="icon"
                width={15}
                height={14}
                className="mx-[6px]"
              />
              <input
                type="text"
                placeholder="Expiracy"
                className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[12px]"
              />
            </div>

            <div className="flex !border !border-gray-500 rounded-xl py-1 px-3 w-full">
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
                className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[12px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14">
        <div>
          <h4 className="text-base font-semibold">Pick up or Delivery</h4>
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
                          <Image
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

      <div className="mt-8">
        <div>
          <input
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
            className="text-blue-500 bg-blue-500 fill-blue-500"
          />
          <label className="mx-2 text-sm" for="flexCheckChecked">
            <span className="text-gray-500"> I agree to the </span>
            <Link href="" className="no-underline text-sky-400">
              Terms and Conditions
            </Link>
          </label>
        </div>

        <div className="my-10 flex sm:!justify-start !justify-center">
          <button className="bg-yellow-400 text-gray-800 text-sm !font-bold rounded-full flex px-[96px] hover:bg-white py-3 border border-black">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buyrequest;
