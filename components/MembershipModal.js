import React from "react";

import { format, parseISO } from "date-fns";

const MembershipModal = ({
  isOpen,
  onRequestClose,
  nextDueDate,
  nextAmountDue,
}) => {
  const formattedDate = format(parseISO(nextDueDate), "dd/MM/yyyy");
  const formattedAmount = parseFloat(nextAmountDue).toFixed(2);

  return isOpen ? (
    <>
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="relative w-full max-w-2xl max-h-full bg-white rounded-lg shadow ">
          <div class="flex items-start justify-between p-4 border-b rounded-t ">
            <h3 class="text-xl font-semibold text-gray-900 ">
              Manage Membership
            </h3>

            <button
              onClick={onRequestClose}
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div class="p-6 space-y-6">
            <p>Next due date: {formattedDate}</p>
            <p>Amount: ${formattedAmount}</p>

            <button className="flex justify-center w-full">
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="border border-black  mx-1 bg-red-600 hover:bg-red-500 text-white !font-bold text-sm  rounded-full py-[16px]  px-12"
              >
                Cancel subscription
              </button>
            </button>
          </div>

          <div class="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={onRequestClose}
              data-modal-hide="defaultModal"
              type="button"
              class="border border-black  mx-1 text-gray-500 bg-white hover:bg-gray-100 !font-bold text-sm  rounded-full py-[16px]  px-12 "
            >
              Close
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="border border-black  mx-1 bg-yellow-400 hover:opacity-80 text-white !font-bold text-sm  rounded-full py-[16px]  px-12"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  ) : (
    ""
  );
};

export default MembershipModal;
