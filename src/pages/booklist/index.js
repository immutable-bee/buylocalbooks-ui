import React from 'react';
import styles from './booklist.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Slidercomponent from '@/components/slidercomponent';
const Booklist = () => {
    var data = [
        {
            head: 'Life of Pi',
            para: 'Bookstore NYC'
        },
        {
            head: 'The Lost Symbol',
            para: 'Bookstore Boston'
        },
        {
            head: 'The Alchemist',
            para: 'Bookstore Seattle'
        },
    ]
    return (
        <div>
            <section className={styles.localbooks}>
                <div className={styles.bookstore}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-8 px-0'>
                                <div className={styles.bookheading}>
                                    <h2>Buylocalbooks.com</h2>
                                    <h6 className='m-0'><span><Image
                                        src="./images/icons/location.svg"
                                        width={10}
                                        height={12}
                                        className="img-fluid"
                                        alt="Picture of the author"
                                    /></span>Your Zip Code</h6>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 px-0'>
                                <div className={styles.input_feild}>
                                    <div className={styles.input_group}>
                                        <Image
                                            src="./images/search-icon.svg"
                                            width={15}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                        <input type="" placeholder='Search for your book' />
                                    </div>

                                    <button type="button" className='border-0 bg-transparent'>
                                        <div className={styles.filter_icon}>
                                            <Image
                                                src="./images/filter.svg"
                                                width={15}
                                                height={14}
                                                className="img-fluid"
                                                alt="icon"
                                            />

                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 px-0'>
                                <div className={styles.near_bookstore}>
                                    <h4 className='m-0'>Bookstores Near You</h4>
                                    <p className='m-0'>See All</p>
                                </div>
                                <div className={styles.slide_component}>
                                    <Slidercomponent />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12  px-0'>
                                <div className={styles.near_bookstore}>
                                    <h4 className='m-0'>Books Recently Bought</h4>
                                    <p className='m-0'>See All</p>
                                </div>
                            </div>
                            {data.map((data, i) => {
                                return (
                                    <div className=' col-md-4 px-0 px-md-2'>


                                        <div className={styles.recently_booksinfo}>
                                            <div className={styles.recently_books} key={i}>
                                                <div className={styles.book_image}>
                                                    <Image
                                                        src="./images/icons/recently-book1.svg"
                                                        width={23}
                                                        height={23}
                                                        className="img-fluid"
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className={styles.recently_info}>
                                                    <h6>{data.head}</h6>
                                                    <p className='m-0'>{data.para}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-4 px-0'>
                                <Link href="/membarshipoption">
                                    <div className={styles.become_member}>

                                        <h5>Become a Member</h5>
                                        <p className='m-0'>Discover format, notes, price and more!</p>

                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Booklist;
