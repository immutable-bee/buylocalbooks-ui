import React from 'react';
import styles from './membershipdetail.module.scss'
import Image from 'next/image';
// import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
const membershipdetail = () => {
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
                    {/* end pihead row */}
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 px-0'>
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
                    </div>
                    {/* end author row */}

                    <div className='row'>
                        <div className='col-md-6 px-0'>
                            <div className={styles.condition_btn}>
                                <div className={styles.condition_new}>
                                    <h6>Condition</h6>
                                    <span>New</span>
                                </div>
                                <div className={styles.condition_format}>
                                    <h6>Format</h6>
                                    <span>Handcover</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end condition btn */}

                    <div className='row'>
                        <div className='col-md-6 col-lg-2 px-0'>
                            <div className={styles.price}>
                                <h5>Price</h5>
                                <h6>$10.99</h6>
                            </div>
                        </div>
                    </div>

                    {/* end price */}

                    <div className='row'>
                        <div className='col-md-6 col-lg-4 px-0'>
                            <div className={styles.author}>
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

                    {/* end bookstore row */}


                    <div className='row'>
                        <div className='col-md-12 px-0'>
                            <div className={styles.gift_btns}>
                                <div className={styles.gift_btn1}>
                                    <button type='btn' className={`rounded-pill ${styles.dark_color}`}>Gift</button>
                                </div>
                                <div className={styles.request_btn}>
                                    <button type='btn' className={`rounded-pill ${styles.dark_color}`}>Request to Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            </div>
    );
}

export default membershipdetail;
