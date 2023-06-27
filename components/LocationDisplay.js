import { useContext, useState } from "react";
import { LocationContext } from "../context/LocationContext";
import Image from "next/image";

const ZipInputModal = ({ isOpen, onClose }) => {
  const { setLocationByZip } = useContext(LocationContext);
  const [zip, setZip] = useState("");

  const handleSubmit = () => {
    if (zip.length === 5) {
      setLocationByZip(zip);
      onClose();
    }
  };

  return isOpen ? (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="relative max-w-sm max-h-[70%] bg-white rounded-lg shadow mx-auto py-4 px-4">
        <div class="flex items-center border-2 border-gray-300 py-2 h-[40px] rounded-2xl pl-3 w-[fit-content] mx-auto">
          <Image
            src="./images/location.svg"
            alt="icon"
            width={14}
            height={16}
          />
          <input
            type="text"
            placeholder="Your Zip Code"
            onChange={(e) => setZip(e.target.value)}
            class="text-[14px] focus:outline-none rounded-2xl w-auto mx-2 py-2"
          />
        </div>
        <div class="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 mt-8">
          <button
            onClick={handleSubmit}
            data-modal-hide="defaultModal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Submit
          </button>
          <button
            onClick={onClose}
            data-modal-hide="defaultModal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

const LocationDisplay = () => {
  const { location } = useContext(LocationContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ZipInputModal isOpen={isOpen} onClose={toggleModal} />
      <div onClick={toggleModal} class="cursor-pointer">
        <h6 className="flex items-center text-yellow-400 pt-1 font-semibold text-[13px]">
          <span className="">
            <Image
              src="./images/location.svg"
              alt="icon"
              width={10}
              height={12}
            />
          </span>
          <span className="px-2">
            {location?.postalCode || "Your Zip Code"}
          </span>
        </h6>
      </div>
    </>
  );
};

export default LocationDisplay;
