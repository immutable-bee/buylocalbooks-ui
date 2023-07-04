import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";

const NoResultsFound = ({ searchTerm }) => {
  return (
    <div className="border-2 text-center mx-auto border-black bg-gray-100 mb-0 rounded-3xl py-4 px-3 mt-4">
      <div>
        <Image
          src="./images/icons/emoji_icon.svg"
          width={29}
          height={19}
          alt="icon"
          className="mx-auto mb-4"
        />
      </div>
      <div>
        <h6 className="font-bold">No matches found for "{searchTerm}"...</h6>
        <p className="text-xs pt-1 text-black">
          Unfortunately, we couldn't find any matches for your search.
        </p>
        <p className="text-xs mb-0 text-black">
          You can make another or search, or check again tomorrow. New books are
          added every day!
        </p>
      </div>
    </div>
  );
};

export default NoResultsFound;
