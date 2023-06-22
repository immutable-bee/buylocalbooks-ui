import React from 'react';
import styles from './bookdetail.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
const Bookdetail = () => {
    return (
        <div>
            <div className={styles.pilife}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 px-0'>
                            <div className={styles.pihead}>
                                <h2><span className=''>
                                    <Image
                                        src="./images/icons/back-arrow.svg"
                                        width={24}
                                        height={24}
                                        className="img-fluid"
                                        alt="Picture of the author"
                                    />
                                </span> Life of Pi</h2>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-xl-3 px-0'>
                            <div className={styles.author}>
                                <h3>Author</h3>
                           
                            <div className={styles.main_author}>
                                <div className={styles.author_img}>
                                <Image
                                        src="./images/icons/stamp-icon.svg"
                                        width={51}
                                        height={51}
                                        className="img-fluid"
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styles.author_info}>
                                    <h5>Yann Martel</h5>
                                    <p>Other books</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-xl-3 px-0'>
                        <div className={styles.author1}>
                                <h3>Bookstore Details</h3>
                            <div className={styles.main_author}>
                                <div className={styles.author_img1}>
                                <Image
                                        src="./images/icons/bookstore-img.svg"
                                        width={102}
                                        height={102}
                                        className="img-fluid"
                                        alt="books_img"
                                    />
                                </div>
                                <div className={styles.bookstore_info}>
                                    <h5>Yann Martel</h5>
                                    <label>Washington</label>
                                    <p>
                                    <Image
                                        src="./images/icons/call-icon.svg"
                                        width={15}
                                        height={15}
                                        className="img-fluid"
                                        alt="call_icon"
                                    />
                                        <span></span>
                                        (603) 555-0123</p>

                                        <p>
                                    <Image
                                        src="./images/icons/attachment-icon.svg"
                                        width={15}
                                        height={15}
                                        className="img-fluid"
                                        alt="call_icon"
                                    />
                                        <span></span>
                                        bookstoreseattle.com</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* end author */}
                   
                    <div className='row '>
                        <div className='col-12 col-md-5 px-0'>
                            <div className={styles.inquire_bookstore}>
                              <p>Inquire with the bookstore for more details or become a member to access all books details at a click of a button!</p>
                            </div>
                        </div>
                    </div>
                    {/* end inquire row */}
                    <div className='row '>
                            <div className='col-12 col-md-4 px-0'>
                                <div className={styles.become_member}>
                                    <Link href="">
                                    <h5>Become a Member</h5>
                                    <p className='m-0'>Discover format, notes, price and more!</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Bookdetail;
