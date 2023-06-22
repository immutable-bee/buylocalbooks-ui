import React from 'react';
import styles from './membershipoption.module.scss'
import Image from 'next/image';
// import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
const Membarshipoption = () => {
    return (
        <div>
            <div className={styles.membershipoption}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 px-0 px-md-2'>
                            <div className={styles.close_btn}>
                           <div className={styles.close_img}>
                           <button type="button" className='border-0 bg-transparent'><Image
                                            src="./images/icons/close-icon.svg"
                                            width={31}
                                            height={31}
                                            className="img-fluid"
                                            alt="icon"
                                        /></button>
                           </div>
                            </div>
                        </div>
                        <div className='col-md-12  px-0 px-md-2'>
                            <div className={styles.welcome_img}>
                            <Image
                                            src="./images/icons/welcome-img.svg"
                                            width={133}
                                            height={133}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                            </div>
                        </div>
                        <div className='col-md-12  px-0 px-md-2'>
                            <div className={styles.welcome_head}>
                                <h4>Welcome among us!</h4>
                                <p className='m-0'>Which plan are you interested in?</p>
                            </div>
                        </div>
                        <div className='col-md-12 col-xl-8 px-0 px-md-2'>
                            <div className={styles.payment_box}>
                                <div className={styles.payment_heading}>
                                    <h5 className='m-0'>One Time Payment</h5>
                                    <h6 className='m-0'>Pay what you want</h6>
                                </div>
                                <div className={styles.payment_list}>
                                   <div className={styles.payment_list1}>
                                   <div className={styles.check_img}>
                                   <Image
                                            src="./images/icons/check-icon.svg"
                                            width={18}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                   </div>
                                        <p className=''>Newsletter about independent bookstores in the U.S.</p>
                                   </div>
                                   <div className={styles.payment_list1}>
                                   <div className={styles.check_img}>
                                   <Image
                                            src="./images/icons/check-icon.svg"
                                            width={14}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                   </div>
                                        <p className='mb-0'>View format, condition notes and price</p>
                                   </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-12 col-xl-8 px-0 px-md-2'>
                            <div className={styles.yearly_membership}>
                                <div className={styles.payment_heading}>
                                    <h5 className='m-0'>Yearly Membership</h5>
                                    <h6 className='m-0'>$9.99 a year</h6>
                                </div>
                                <div className={styles.payment_list}>
                                   <div className={styles.payment_list1}>
                                   <div className={styles.check_img}>
                                   <Image
                                            src="./images/icons/white-check.svg"
                                            width={19}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                   </div>
                                        <p className=''>Newsletter about independent bookstores in the U.S.</p>
                                   </div>
                                   <div className={styles.payment_list1}>
                                   <div className={styles.check_img}>
                                   <Image
                                            src="./images/icons/white-check.svg"
                                            width={14}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                   </div>
                                        <p className=''>View format, condition notes and price</p>
                                   </div>
                                   <div className={styles.payment_list1}>
                                   <div className={styles.check_img}>
                                   <Image
                                            src="./images/icons/white-check.svg"
                                            width={14}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                   </div>
                                        <p className=''>Request to buy books online</p>
                                   </div>
                                   <div className={styles.payment_list1}>
                                   <div className={styles.check_img}>
                                   <Image
                                            src="./images/icons/white-check.svg"
                                            width={14}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                   </div>
                                        <p className='mb-0'>Option to gift books</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 px-0 px-md-2'>
                            <div className={styles.literacy}>
                                <p>100% profits go towards childrens literacy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Membarshipoption;
