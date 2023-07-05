import React from "react";
import styles from "./membershipoption.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigationContext } from "../../context/NavigationContext";
const Membarshipoption = () => {
  const { previousPage } = useNavigationContext();
  return (
    <div className="container mx-auto px-3 pt-10">
      <div className="flex justify-start">
        <Link href={previousPage ? previousPage : "/"}>
          <span className="">
            <Image
              src="./images/icons/back-arrow.svg"
              width={24}
              height={24}
              alt="Picture of the author"
            />
          </span>
        </Link>
      </div>
      <div className="text-center mx-auto">
        <div>
          <Image
            width={133}
            height={133}
            src="./images/icons/welcome-img.svg"
            alt="icon"
            className="mx-auto"
          />
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Welcome among us!</h4>
          <p className="text-sm text-gray-400">
            Which plan are you interested in?
          </p>
        </div>
      </div>

      <div className="bg-yellow-400 rounded-3xl border border-black px-4 py-4 mt-8">
        <div className="flex justify-between items-center">
          <h5 className="text-base font-semibold">One Time Payment</h5>
          <h6 className="text-xs font-semibold">Pay what you want</h6>
        </div>
        <div>
          <div className="flex items-center my-1">
            <div className="flex items-center">
              <Image
                src="./images/icons/check-icon.svg"
                width={14}
                height={14}
                alt="icon"
                className="w-4"
              />
            </div>
            <div className="my-1">
              <p className="px-2 mb-0 text-xs">
                Newsletter about independent bookstores in the U.S.
              </p>
            </div>
          </div>
          <div className="flex items-center my-1">
            <div className="flex items-center">
              <Image
                src="./images/icons/check-icon.svg"
                width={18}
                height={14}
                alt="icon"
                className="w-4"
              />
            </div>
            <div className="my-1">
              <p className="px-2 mb-0 text-xs">
                View format, condition notes and price
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sky-500 text-white rounded-3xl border border-black px-4 py-4 mt-8">
        <div className="flex justify-between items-center">
          <h5 className="text-base font-semibold">Yearly Membership</h5>
          <h6 className="text-xs font-semibold">$9.99 a year</h6>
        </div>
        <div>
          <div className="flex items-center my-1">
            <div className="flex items-center">
              <Image
                src="./images/icons/white-check.svg"
                width={19}
                height={14}
                alt="icon"
                className="w-4"
              />
            </div>
            <div className="my-1">
              <p className="px-2 mb-0 text-xs">
                Newsletter about independent bookstores in the U.S.
              </p>
            </div>
          </div>
          <div className="flex items-center my-1">
            <div className="flex items-center">
              <Image
                src="./images/icons/white-check.svg"
                width={14}
                height={14}
                alt="icon"
                className="w-4"
              />
            </div>
            <div className="my-1">
              <p className="px-2 mb-0 text-xs">
                View format, condition notes and price
              </p>
            </div>
          </div>
          <div className="flex items-center my-1">
            <div className="flex items-center">
              <Image
                src="./images/icons/white-check.svg"
                width={14}
                height={14}
                alt="icon"
                className="w-4"
              />
            </div>
            <div className="my-1">
              <p className="px-2 mb-0 text-xs">Request to buy books online</p>
            </div>
          </div>
          <div className="flex items-center my-1">
            <div className="flex items-center">
              <Image
                src="./images/icons/white-check.svg"
                width={14}
                height={14}
                alt="icon"
                className="w-4"
              />
            </div>
            <div className="my-1">
              <p className="px-2 mb-0 text-xs">Request to buy books online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membarshipoption;
