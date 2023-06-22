import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slidercomponent.module.scss'
import Image from 'next/image';
// import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/css';

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
            direction: 'horizontal',
            slidesPerView: 4,
            spaceBetween: 14,
        },
        1200: {
            direction: 'horizontal',
            slidesPerView: 7,
            spaceBetween: 14,
          },
      }}
   
      spaceBetween={14}
    //   slidesPerView={1}
      
      navigation
    >
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Lords of the Rings</p>
                            <label>Bookstore Vermont</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                           height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Lords of the Rings</p>
                            <label>Bookstore Vermont</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Lords of the Rings</p>
                            <label>Bookstore Vermont</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.bookslide}>
                        <div className={styles.bookbox}>
                            <div className={styles.bookimage}>
                            <Image
                                            src="./images/icons/book.svg"
                                            width={62}
                                            height={62}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className={styles.about_book}>
                            <p className='m-0'>The Little Prince</p>
                            <label>Bookstore San Diego</label>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slidercomponent;
