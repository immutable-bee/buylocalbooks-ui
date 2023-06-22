import React from 'react';
import styles from './giftbook.module.scss'
import Image from 'next/image';
// import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
const giftbook = () => {
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
                                        alt="back_arrow"
                                    />
                                </span>Gift a Book</h2>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12  px-0 px-md-2'>
                            <div className={styles.gift_head}>
                                <h3>Choose a gift option</h3>

                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 px-0 px-md-2'>

                            <div className={styles.gift_row}>
                                <div className={styles.profile_icon}>
                                    <Image
                                        src="./images/icons/profile-icon.svg"
                                        width={18}
                                        height={18}
                                        className="img-fluid"
                                        alt="back_arrow" />
                                </div>
                                <div className={styles.profile_info}>
                                    <h4>To a friend</h4>
                                    <p className='m-0'>Purchase a book for a friend to pick up or deliver</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 px-0 px-md-2'>

                            <div className={styles.gift_row1}>
                                <div className={styles.profile_icon}>
                                    <Image
                                        src="./images/icons/pay-icon.svg"
                                        width={18}
                                        height={18}
                                        className="img-fluid"
                                        alt="back_arrow" />
                                </div>
                                <div className={styles.profile_info}>
                                    <h4>Pay it forward</h4>
                                    <p className='m-0'>Purchase a book and the next person to request to buy the book will receive the book free of charge.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default giftbook;
