import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { useRef, useEffect } from "react";
import Loading from "../../components/utility/Loading";

const ResultsFound = ({
  type = "listings",
  results,
  setCursor,
  isResultsEnd,
}) => {
  const sentinel = useRef();

  const formatTitle = (title) => {
    if (title.length > 32) {
      return title.slice(0, 28).concat("...");
    } else {
      return title;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCursor(results[results.length - 1].id);
        }
      },
      { rootMargin: "0px 0px 100px 0px" }
    );

    // If there's a sentinel, observe it
    if (sentinel.current) {
      observer.observe(sentinel.current);
    }

    // On cleanup, stop observing the sentinel
    return () => {
      if (sentinel.current) {
        observer.unobserve(sentinel.current);
      }
    };
  }, [results, setCursor]);

  return (
    <div className="pt-[30px]">
      <div className="col-12 ">
        <div className="flex justify-between">
          <h4 className="text-base font-serif font-semibold">Results</h4>
        </div>
      </div>
      <div className="grid sm:grid-cols-3">
        {results.map((result, i) => {
          return (
            <div key={result.id}>
              <Link
                href={
                  type === "listings"
                    ? `/listingdetail?id=${encodeURIComponent(result.id)}`
                    : `/bookstoredetail?id=${encodeURIComponent(result.id)}`
                }
                style={{ textDecoration: "none" }}
              >
                <div className="flex border border-gray-400 rounded-2xl px-3 mr-3 my-2 py-3">
                  <div className="p-[12px] bg-sky-200 mb-0 rounded-lg ">
                    <Image
                      src="./images/icons/recently-book1.svg"
                      width={23}
                      height={23}
                      alt="icon"
                    />
                  </div>
                  <div className="px-3">
                    <h6 className="font-serif text-xs text-gray-600">
                      {type === "listings"
                        ? formatTitle(result.title)
                        : result.business_name}
                    </h6>
                    <p className="m-0 font-serif text-xs text-gray-400 pt-1">
                      {type === "listings"
                        ? result.owner.business_name
                        : `${result.business_city}, ${result.business_state}`}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
        {isResultsEnd ? (
          <div className="flex w-screen justify-center">
            <h5>End of Results</h5>
          </div>
        ) : (
          <div className="flex w-screen justify-center" ref={sentinel}>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsFound;
