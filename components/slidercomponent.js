import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slidercomponent.module.scss";
import Image from "next/image";
// import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";

// import 'swiper/css/navigation';

const Slidercomponent = () => {
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
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Lords of the Rings</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore Vermont</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Lords of the Rings</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore Vermont</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Lords of the Rings</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore Vermont</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="border border-gray-300 h-96 rounded-xl p-[11px]">
          <div>
            <div>
              <div className="bg-sky-200 mx-auto py-8 rounded-xl">
                <img src="./images/icons/book.svg" alt="icon" className="mx-auto"/>
              </div>
            </div>
            <div>
              <p className="mb-0 font-serif text-xs mt-[12px]">The Little Prince</p>
              <label className="font-serif text-xs mt-[6px] text-gray-400">Bookstore San Diego</label>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slidercomponent;
