import React from 'react';
import styles from './member.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
const Member = () => {
    return (
        <div>
            <div className={styles.member_page}>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 px-0'>
                            <div className={styles.back_arrow_btn}>
                                <div className={styles.back_arrow}>
                                    <Link href="/booklist" className='text-decoration-none'>
                                        <Image
                                            src="./images/icons/arrow-back-btn.svg"
                                            width={31}
                                            height={31}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 px-0'>
                            <div className={styles.lea_green_content}>
                                <div className={styles.top_lea_green}>
                                    <div className={styles.lea_green}>
                                        <Image
                                            src="./images/icons/greene-img.svg"
                                            width={129}
                                            height={129}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                    </div>
                                    <div className={styles.lea_green_info}>
                                        <h4>Lea Greene</h4>
                                        <p>leagreene@gmail.com</p>
                                        <label><span>
                                            <Image
                                                src="./images/icons/black-location-icon.svg"
                                                width={18}
                                                height={18}
                                                className="img-fluid"
                                                alt="icon"
                                            /></span>Washington</label>
                                    </div>
                                    <div className={styles.purchsed_book_info}>
                                        <div className={styles.purchase_book}>
                                            <h6>128</h6>
                                            <p className='m-0'>Books purchased</p>
                                        </div>
                                        <div className={styles.purchase_book1}>
                                            <h6>51</h6>
                                            <p className='m-0'>Books Gifted</p>
                                        </div>

                                    </div>
                                    <div className={styles.location_preference}>
                                        <div className={styles.location_preference_head}>
                                            <h3>Location preferences</h3>
                                        </div>





                                        
                                            <div className='col-md-12'>
                                                <div className={styles.gift_types}>
                                                    <div className={styles.tofriend}>
                                                        <label class={styles.custom_radio}>
                                                            <input type="radio" name="radio" checked />

                                                            <button className='rounded-pill'>
                                                                <span>
                                                                    <Image
                                                                        src="./images/icons/server-icon.svg"
                                                                        width={14}
                                                                        height={14}
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                                National</button>
                                                        </label>

                                                    </div>
                                                    <div className={styles.tofriend}>
                                                        <label class={styles.custom_radio}>
                                                            <input type="radio" name="radio" />

                                                            <button className='rounded-pill'>
                                                                <span>
                                                                    <Image
                                                                        src="./images/icons/black-location-icon.svg"
                                                                        width={14}
                                                                        height={14}
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                                By State</button>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>




















                                    </div>
                                    <div className={styles.share_localbooks}>
                                        <Link href="" className='rounded-pill text-decoration-none'>Share BuyLocalBooks.com</Link>
                                    </div>
                                    <div className={styles.logout_btn}>
                                        <Link href='' className="text-decoration-none"><span> <Image
                                            src="./images/icons/logout-icon.svg"
                                            width={18}
                                            height={18}
                                            className=""
                                            alt="icon"
                                        /></span> Logout</Link>
                                    </div>
                                    <div className={styles.edit_btn}>
                                        <Link href=""> <Image
                                            src="./images/icons/edit-btn.svg"
                                            width={16}
                                            height={16}
                                            className=""
                                            alt="icon"
                                        /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;
