import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigationContext } from "../../context/NavigationContext";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../../firebase/config";

const Membership = () => {
  const { previousPage } = useNavigationContext();

  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        router.push("/auth");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

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

      <Link
        href={`https://buy.stripe.com/test_4gw3fI8pb7pFfgQdQQ?client_reference_id=${user.uid}`}
        style={{ textDecoration: "none" }}
      >
        <div className="bg-yellow-400 rounded-3xl border border-black px-4 py-4 mt-8">
          <div className="flex justify-between items-center">
            <h5 className="text-base font-semibold text-black">
              One Time Payment
            </h5>
            <h6 className="text-xs font-semibold text-black">
              Pay what you want
            </h6>
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
                <p className="px-2 mb-0 text-xs text-black">
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
                <p className="px-2 mb-0 text-xs text-black">
                  View format, condition notes and price
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link
        href={`https://buy.stripe.com/test_cN2eYqcFrcJZ3y8289?client_reference_id=${user.uid}`}
        style={{ textDecoration: "none" }}
      >
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
      </Link>
    </div>
  );
};

export default Membership;
