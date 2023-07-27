import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import { getStoreDetails } from "../../services/blbn";
import Loading from "../../components/utility/Loading";
import { useNavigationContext } from "../../context/NavigationContext";

const Bookstoredetail = () => {
  const router = useRouter();
  const { previousPage } = useNavigationContext();

  const [storeDetails, setStoreDetails] = useState(null);

  useEffect(() => {
    const { id } = router.query;

    const fetchDetails = async (id) => {
      const storeDetails = await getStoreDetails(id);

      setStoreDetails(storeDetails);
    };

    if (id) {
      fetchDetails(id);
    }
  }, [router.query]);

  return storeDetails ? (
    <div className="container mx-auto px-3">
      <div className="pt-10">
        <h2 className="flex items-center">
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
          <span className="mx-3 text-2xl font-bold">Bookstore Details</span>
        </h2>
      </div>

      <div className="pt-3 max-w-3xl w-full flex-wrap flex items-start justify-between">
        <div className="sm:!mt-0 !mt-7">
          <h3 className=" sm:!pt-0 !pt-3 text-[16px] font-semibold">
            Bookstore Details
          </h3>
          <div className="flex pt-[6px]">
            <div className="pr-2">
              <Image
                width={102}
                height={102}
                src="./images/icons/bookstore-img.svg"
                alt="books_Image"
                className="!h-full"
              />
            </div>
            <div className="px-2">
              <h5 className="text-sm  my-1 font-semibold mb-0">
                {storeDetails.business_name}
              </h5>
              <label className="text-sm font-semibold sm:my-2 text-gray-400 mb-0 my-2">
                {`${storeDetails.business_street}, ${storeDetails.business_city}, ${storeDetails.business_state}`}
              </label>
              <a
                href="tel:(603)555-0123"
                className="flex text-sm text-sky-500 font-semibold my-1 mb-0 "
              >
                <Image
                  src="./images/icons/call-icon.svg"
                  width={20}
                  height={20}
                  alt="call_icon"
                  className="pr-2"
                />
                <span className=" mb-0">{storeDetails.phone_number}</span>
              </a>
              <a
                href="mailto:ibrahim@justibrahim.com"
                className="flex items-center text-sm text-sky-500 font-semibold my-1 mb-0 "
              >
                <svg
                  class="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <span className=" mb-0 ml-2">{storeDetails.email}</span>
              </a>

              <a
                href="bookstoreseattle.com"
                className="font-normal flex text-sm text-sky-500 my-2 mb-0"
              >
                <Image
                  src="./images/icons/attachment-icon.svg"
                  width={20}
                  height={20}
                  alt="call_icon"
                  className="pr-2 "
                />
                {storeDetails.url ? (
                  <span className=" mb-0 font-semibold ">
                    {storeDetails.url}
                  </span>
                ) : null}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Bookstoredetail;
