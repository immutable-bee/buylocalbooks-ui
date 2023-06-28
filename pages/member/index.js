import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import MembershipModal from "@/components/MembershipModal";
const Member = () => {
  const [isNationalSelected, setNationalSelected] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isMember, setIsMember] = useState(true);
  return (
    <div>
      <div className="bg-yellow-400 h-40 !px-4 sm:!px-16 !pt-8 sm:!pt-10">
        <div className="">
          <Link href="/">
            <Image
              src="./images/icons/arrow-back-btn.svg"
              alt="icon"
              width={31}
              height={31}
            />
          </Link>
        </div>
      </div>
      <div className="rounded-2xl">
        <div className="!max-w-xs relative text-center  mx-auto">
          <div className="-mt-[67px] ">
            <div>
              <Image
                src="./images/icons/greene-img.svg"
                width={129}
                height={129}
                className="mx-auto"
                alt="icon"
              />
            </div>
            <div className="flex absolute right-0 top-24 justify-center !border !border-gray-400 rounded-xl p-2">
              <Link href="">
                <Image
                  src="./images/icons/edit-btn.svg"
                  width={16}
                  height={16}
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
                <Image
                  src="./images/icons/black-location-icon.svg"
                  width={18}
                  height={18}
                  alt="icon"
                />
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

            <div className="sm:flex pt-2">
              <div>
                <label className="w-full">
                  <input type="radio" name="radio" className="sr-only" />

                  <div className="sm:ml-2">
                    <button
                      className={` font-bold rounded-full flex justify-center w-full sm:!w-40 text-[13px] py-3 border  border-black  ${isNationalSelected
                          ? "bg-sky-500 border border-black text-white"
                          : "border-gray-700 border text-gray-800"
                        }`}
                      onClick={() => setNationalSelected(true)}
                    >
                      <span>
                      <svg  class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

                      </span>
                      <span className="mx-1 text-sm sm:text-xs">National</span>
                    </button>
                  </div>
                </label>
              </div>

              <div>
                <label className="w-full">
                  <input type="radio" name="radio" className="sr-only" />

                  <div className="sm:ml-2 sm:!my-0 !my-4">
                    <button
                      className={` font-bold rounded-full flex justify-center w-full sm:!w-40 text-[13px] py-3  ${isNationalSelected
                          ? "border-gray-700 border text-gray-800"
                          : "bg-sky-500 border border-black text-white"
                        }`}
                      onClick={() => setNationalSelected(false)}
                    >
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

                      <span className="mx-1 text-sm sm:text-xs">By State</span>
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <MembershipModal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}

            nextDueDate="2023-07-26" // replace with actual data
            nextAmountDue="10.99" // replace with actual data
          />
          {isMember ? (
            <div className="flex justify-center w-full">
              <Link href="" className="no-underline w-[90%]">
                <button onClick={() => setShowModal(true)} className="border flex justify-center w-full border-black  mx-1 bg-yellow-400 text-gray-700 !font-bold text-sm mt-8 rounded-full py-[16px]  px-[32px]">

                  Manage Membership
                </button>
              </Link>
            </div>
          ) : (
            ''
          )}

          <div className="flex justify-center w-full">
            <Link href="" className="no-underline w-[90%]">
              <button className="border flex justify-center w-full border-black  mx-1 bg-yellow-400 text-gray-700 !font-bold text-sm mt-8 rounded-full py-[16px]  px-[32px]">
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
                <Image
                  src="./images/icons/logout-icon.svg"
                  alt="icon"
                  width={18}
                  height={18}
                />
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
