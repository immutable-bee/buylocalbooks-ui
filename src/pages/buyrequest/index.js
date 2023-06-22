import React from 'react';
import styles from './buyrequest.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
const Buyrequest = () => {
    return (
        <div>
            <div className={styles.pilife}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 px-0'>
                            <div className={styles.lifepi}>
                                <div className={styles.pihead}>
                                    <h2><span className=''>
                                        <Image
                                            src="./images/icons/back-arrow.svg"
                                            width={24}
                                            height={24}
                                            className="img-fluid"
                                            alt="Picture of the author"
                                        />
                                    </span>Request to Buy</h2>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.form_heading}>
                        <div className='row'>
                            <div className='col-12  px-0 px-md-2'>
                                <div className={styles.heading}>
                                    <h4>Your Contact Information</h4>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 px-0 px-md-2'>
                                <div className={styles.input_feild}>
                                    <div className={styles.input_group}>
                                        <Image
                                            src="./images/icons/user-icon.svg"
                                            width={15}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                        <input type="text" placeholder='Your Name' />
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-6 col-lg-4 px-0 px-md-2'>
                                <div className={styles.input_feild}>
                                    <div className={styles.input_group}>
                                        <Image
                                            src="./images/icons/email-icon.svg"
                                            width={15}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                        <input type="email" placeholder='Your Email' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 px-0 px-md-2'>
                                <div className={styles.input_feild}>
                                    <div className={styles.input_group}>
                                        <Image
                                            src="./images/icons/call-icon.svg"
                                            width={15}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                        <input type="text" placeholder='Your phone number' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={styles.form_heading}>
                        <div className='row'>
                            <div className='col-12  px-0 px-md-2'>
                                <div className={styles.heading}>
                                    <h4>Your Payment Information</h4>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 px-0 px-md-2'>
                                <div className={styles.input_feild}>
                                    <div className={styles.input_group}>
                                        <Image
                                            src="./images/icons/user-icon.svg"
                                            width={15}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                        <input type="text" placeholder='Cardholder Name' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 px-0 px-md-2'>
                                <div className={styles.input_feild}>
                                    <div className={styles.input_group}>
                                        <Image
                                            src="./images/icons/aadhar-icon.svg"
                                            width={15}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                        <input type="text" placeholder='Card Number' />
                                    </div>
                                </div>

                            </div>

                            <div className='col-6 col-md-6 col-lg-2 px-0'>
                                <div className={styles.input_feild}>
                                    <div className={styles.input_group}>
                                        <Image
                                            src="./images/icons/calender.svg"
                                            width={15}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                        <input type="email" placeholder='Expiracy' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 col-md-6 col-lg-2 pe-0'>
                                <div className={styles.input_feild}>
                                    <div className={styles.input_group}>
                                        <Image
                                            src="./images/icons/hash-icon.svg"
                                            width={15}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                        <input type="email" placeholder='CVV' />
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>



                    <div className={styles.form_heading}>
                        <div className='row'>
                            <div className='col-12  px-0 px-md-2'>
                                <div className={styles.heading}>
                                    <h4>Pick up or Delivery</h4>
                                </div>
                            </div>



                            <div className='col-6 col-md-3 col-lg-2 ps-0'>
                                <div className={styles.pickup_btn}>
                                    <div className={styles.tofriend}>
                                        <label class={styles.custom_radio}>
                                            <input type="radio" name="radio" checked />

                                            <button className='rounded-pill'><span> <Image
                                                src="./images/icons/download.svg"
                                                width={15}
                                                height={14}
                                                className="img-fluid"
                                                alt="icon"
                                            /></span>Pickup</button>
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className='col-6 col-md-3 col-lg-2 ps-0'>
                                <div className={styles.pickup_btn}>
                                    <div className={styles.tofriend}>
                                        <label class={styles.custom_radio}>
                                            <input type="radio" name="radio" checked />

                                            <button className='rounded-pill'><span> <Image
                                                src="./images/icons/delivery-icon.svg"
                                                width={15}
                                                height={14}
                                                className="img-fluid"
                                                alt="icon"
                                            /></span>Delivery</button>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.terms_condition}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        I agree to the <Link href=''>Terms and Conditions</Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 px-0'>
                            <div className={styles.submit_btn}>
                                <button type="button" className='rounded-pill'>Submit Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Buyrequest;