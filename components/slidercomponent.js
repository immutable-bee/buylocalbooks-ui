import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import { useState } from "react";
import Link from "next/link";
import Loading from "./utility/Loading";

const Slidercomponent = ({ storesNearYou }) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setStores(storesNearYou);
  }, [storesNearYou]);

  return (
    <div>
      <Swiper
        // install Swiper modules
        breakpoints={{
          240: {
            slidesPerView: 1.8,
            centeredSlidesBounds: true,
          },
          768: {
            direction: "horizontal",
            slidesPerView: 4,
            spaceBetween: 14,
          },
          1200: {
            direction: "horizontal",
            slidesPerView: 7,
            spaceBetween: 14,
          },
        }}
        spaceBetween={14}
        //   slidesPerView={1}

        navigation
      >
        {stores.length > 0 ? (
          stores.map((store) => (
            <SwiperSlide
              key={store.id}
              className="border border-gray-300 h-96 rounded-xl p-[11px]"
            >
              <div>
                <Link
                  href={`/bookstoredetail?id=${store.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                      <img
                        src="./images/icons/book.svg"
                        alt="icon"
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="mb-0 font-serif text-xs mt-[12px]">
                      {store.business_name}
                    </p>
                    <label className="font-serif text-xs mt-[6px] text-gray-400">
                      {`${store.business_city}, ${store.business_state}`}
                    </label>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide className=" h-96 rounded-xl p-[11px]">
              <div>
                <Loading />
              </div>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Slidercomponent;
