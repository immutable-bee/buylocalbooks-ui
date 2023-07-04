import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const ResultsFound = ({ results }) => {
  return (
    <div className="pt-[30px]">
      <div className="col-12 ">
        <div className="flex justify-between">
          <h4 className="text-base font-serif font-semibold">Results</h4>
          <h6 className="text-yellow-400 font-semibold text-xs font-serif">
            See All
          </h6>
        </div>
      </div>
      <div className="grid sm:grid-cols-3">
        {results.map((result, i) => {
          return (
            <div key={result.id}>
              <Link
                href={`/listingdetail?id=${encodeURIComponent(result.id)}`}
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
                      {result.title}
                    </h6>
                    <p className="m-0 font-serif text-xs text-gray-400 pt-1">
                      {result.owner.business_name}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsFound;
