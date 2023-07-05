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
    <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div class="relative w-full max-w-lg max-h-full bg-white rounded-lg shadow ">
        <div class="flex items-start justify-between p-4 border-b rounded-t ">
          <h3 class="text-xl font-semibold text-gray-900 ">
          Your Zip Code
          </h3>

          <button onClick={onClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="defaultModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <div class="p-6 my-4">
        <div class="flex w-full items-center border-2 border-gray-300 py-2 h-[40px] rounded-2xl pl-3  mx-auto">
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
        </div>
        <div class="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button onClick={onClose} data-modal-hide="defaultModal" type="button" class="border border-black  mx-1 text-gray-500 bg-white hover:bg-gray-100 !font-bold text-sm  rounded-full py-[16px]  px-12 ">Close</button>
          <button onClick={handleSubmit} data-modal-hide="defaultModal" type="button" class="border border-black  mx-1 bg-yellow-400 hover:opacity-80 text-white !font-bold text-sm  rounded-full py-[16px]  px-12">Submit</button>

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
