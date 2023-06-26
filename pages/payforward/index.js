import React, { useState } from "react";
import styles from "./payforward.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
// import Modal from "src/components/Modal";

const Payforward = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container mx-auto px-3 pt-10">
      <div>
        <div>
          <div>
            <div>
              <div>
                <h2 className="flex">
                  <Link href="/">
                    <span className="">
                      <img
                        src="./images/icons/back-arrow.svg"
                        alt="back_arrow"
                      />
                    </span>
                  </Link>
                  <span className="mx-3 text-xl font-bold">
                    {" "}
                    Gift a Book
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="pt-3">
                <h3 className=" text-sm font-bold flex items-center">
                  Gift Options
                  <span className="ml-2">
                    <img
                      src="./images/icons/important-icon.svg"
                      alt="back_arrow"
                    />
                  </span>
                </h3>
              </div>
              <div className="sm:flex pt-2">
                <div>
                  <label>
                    <input type="radio" name="radio" className="sr-only" />

                    <div className="ml-2">
                      <button className="text-white font-bold rounded-full flex px-[120px] sm:px-[40px] text-[13px] py-3 border bg-sky-400 border-black">
                        <span className="mx-1 text-gray-600">
                          <img
                            src="./images/icons/white-user-icon.svg"
                            alt="icon"
                          />
                        </span>
                        <span className="mx-1 text-sm sm:text-xs">To a friend</span>
                      </button>
                    </div>
                  </label>
                </div>

                <div>
                  <label>
                    <input type="radio" name="radio" className="sr-only" />

                    <div className="ml-2 sm:!my-0 !my-4">
                      <button className="text-black font-bold rounded-full flex px-[120px] sm:px-[40px] text-[13px] py-3 border border-gray-400">
                        {/* <span className="mx-1 text-gray-600">
                          <img
                            src="./images/icons/light-pay-icon.svg"
                            alt="icon"
                          />
                        </span> */}
                        <span className="mx-1 text-sm sm:text-xs">Pay It Forword</span>
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="pt-12">
                <h4 className="text-base font-bold">
                  Your Payment information
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 mt-3 gap-3">
                <div className="flex py-1 !border !border-gray-400 rounded-xl px-3 w-full">
                  <img
                    src="./images/icons/user-icon.svg"
                    alt="icon"
                    className="mx-[6px]"
                  />
                  <input
                    type="text"
                    placeholder="CardHolder Home"
                    className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[14px]"
                  />
                </div>

                <div className="flex py-1 !border !border-gray-400 rounded-xl px-3 w-full">
                  <img
                    src="./images/icons/aadhar-icon.svg"
                    alt="icon"
                    className="mx-[6px]"
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[14px]"
                  />
                </div>
                <div className="grid grid-cols-2 !sm:mt-0  gap-3">
                  <div className="flex py-1 !border !border-gray-400 rounded-xl px-3 w-full">
                    <img
                      src="./images/icons/calender.svg"
                      alt="icon"
                      className="mx-[6px]"
                    />
                    <input
                      type="text"
                      placeholder="Expiracy"
                      className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[14px]"
                    />
                  </div>

                  <div className="flex py-1 !border !border-gray-400 rounded-xl px-3 w-full">
                    <img
                      src="./images/icons/hash-icon.svg"
                      alt="icon"
                      className="mx-[6px]"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="text-[14px] rounded-xl w-full px-[6px] focus:outline-none py-[14px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h6 className="font-bold">Note</h6>
            <div className="flex py-1 !border !border-gray-400 !border-solid rounded-xl mr-6 my-3 w-full sm:w-[300px] pl-3">
              <img
                src="./images/icons/blue-message-icon.svg"
                alt="icon"
                className="mx-[6px]"
              />
              <input
                type="text"
                placeholder="Add a note"
                className="text-[14px] px-[6px] focus:outline-none rounded-xl py-[12px]  w-full"
              />
            </div>
          </div>

          <div className="mt-12">
            <div>
              <div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className="mx-2 text-sm" for="flexCheckChecked">
                    <span className="text-gray-500"> I agree to the</span>{" "}
                    <Link href="" className="no-underline text-sky-400">
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
            </div>

            <div className="py-5 sm:!justify-start !justify-center flex">
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="text-black font-bold rounded-full flex px-32 sm:px-16 h-12 items-center sm:py-3 border bg-yellow-400 border-black"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span className="mx-1 text-xsm text-gray-700">Gift Book</span>
              </button>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-12">
              <div className={styles.modal_content1}>
                <div
                  className={` ${showModal && styles.model_show} ${
                    styles.modal_info
                  } `}
                >
                  <div className={styles.icon_img}>
                    <button
                      onClick={() => setShowModal(false)}
                      type="btn"
                      className="bg-transparent border-0"
                    >
                      <Image
                        src="./images/icons/modal-close-btn.svg"
                        width={14}
                        height={14}
                        alt="close_icon"
                        className=""
                      />
                    </button>
                  </div>
                  <div className={styles.modal_heading}>
                    <h3>Gift Options</h3>
                  </div>
                  <div className={styles.modal_content}>
                    <h6>
                      <span>
                        <Image
                          src="./images/icons/profile-icon.svg"
                          width={14}
                          height={14}
                          alt="profile-icon"
                          className=""
                        />
                      </span>
                      To a friend
                    </h6>
                    <p>Purchase a book for a friend to pick up or deliver.</p>
                  </div>
                  <div className={styles.modal_content}>
                    <h6>
                      <span>
                        <Image
                          src="./images/icons/modal-pay-icon.svg"
                          width={14}
                          height={14}
                          alt="pay-icon"
                          className=""
                        />
                      </span>
                      To a friend
                    </h6>
                    <p>Purchase a book for a friend to pick up or deliver.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Payforward;
