import React, { useState } from 'react';
import styles from './payforward.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
// import Modal from "src/components/Modal";

const Payforward = () => {
    const [showModal, setShowModal] = useState(false);
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
                    {/***************** * */}
                    <div className='row'>
                        <div className='col-md-6 px-0 px-md-2'>
                            <div className={styles.gift_head}>
                                <h3>Gift Options <span>
                                    <Image
                                        src="./images/icons/important-icon.svg"
                                        width={15}
                                        height={15}
                                        className="img-fluid"
                                        alt="back_arrow"
                                    />
                                </span></h3>
                            </div>
                            <div className={styles.gift_types}>
                                <div className={styles.tofriend}>
                                    <label class={styles.custom_radio}>
                                        <input type="radio" name="radio" checked />

                                        <button className={`rounded-pill ${styles.dark_color}`}>
                                            <span>
                                                <Image
                                                    src="./images/icons/white-user-icon.svg"
                                                    width={16}
                                                    height={16}
                                                    className="img-fluid"
                                                    alt="back_arrow"
                                                />
                                            </span>
                                            To a friend</button>
                                    </label>

                                </div>
                                <div className={styles.tofriend}>
                                    <label class={styles.custom_radio}>
                                        <input type="radio" name="radio" />

                                        <button className={`rounded-pill ${styles.dark_color}`}>
                                            <span>
                                                <Image
                                                    src="./images/icons/light-pay-icon.svg"
                                                    width={16}
                                                    height={16}
                                                    className="img-fluid"
                                                    alt="back_arrow"
                                                />
                                            </span>
                                            Pay it forward</button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ******************** */}



                    <div className={styles.form_heading}>
                        <div className='row'>
                            <div className='col-12  px-0 px-md-2'>
                                <div className={styles.heading}>
                                    <h4>Your Payment information</h4>
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
                                        <input type="text" placeholder='Your Cardholder name' />
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
                                        <input type="text" placeholder='Card number' />
                                    </div>
                                </div>

                            </div>

                            <div className='col-6 col-md-6 col-lg-2 px-0 px-md-2'>
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
                            <div className='col-6 col-md-6 col-lg-2 px-0 px-md-2'>
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
                    {/* ******************** */}





                    {/* ************************** */}

                    <div className={styles.form_heading}>
                        <div className='row'>
                            <div className='col-12  px-0 px-md-2'>
                                <div className={styles.heading}>
                                    <h4>Note</h4>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 px-0 px-md-2'>
                                <div className={styles.input_feild}>
                                    <div className={styles.input_group}>
                                        <Image
                                            src="./images/icons/blue-message-icon.svg"
                                            width={15}
                                            height={14}
                                            className="img-fluid"
                                            alt="icon"
                                        />
                                        <input type="text" placeholder='Add a note.....' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* *********************** */}
                    <div className='row'>
                        <div className='col-md-12 px-0 px-md-2'>
                            <div className={styles.terms_condition}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        I agree to the <Link href=''>Terms and Conditions</Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5 col-lg-3 px-0'>
                            <div className={styles.submit_btn}>
                                <button onClick={() => setShowModal(true)} type="button" className='rounded-pill  m-auto' data-bs-toggle="modal" data-bs-target="#exampleModal">Gift Book</button>
                            </div>


                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles.modal_content1}>
                                <div className={` ${showModal && styles.model_show} ${styles.modal_info} `}>
                                    <div className={styles.icon_img}>
                                        <button onClick={() => setShowModal(false)} type='btn' className='bg-transparent border-0'>
                                            <Image
                                                src="./images/icons/modal-close-btn.svg"
                                                width={14}
                                                height={14}
                                                alt='close_icon'
                                                className='' />
                                        </button>
                                    </div>
                                    <div className={styles.modal_heading}>
                                        <h3>Gift Options</h3>
                                    </div>
                                    <div className={styles.modal_content}>
                                        <h6><span><Image
                                            src="./images/icons/profile-icon.svg"
                                            width={14}
                                            height={14}
                                            alt='profile-icon'
                                            className='' /></span>To a friend</h6>
                                        <p>Purchase a book for a friend to pick up or deliver.</p>
                                    </div>
                                    <div className={styles.modal_content}>
                                        <h6><span><Image
                                            src="./images/icons/modal-pay-icon.svg"
                                            width={14}
                                            height={14}
                                            alt='pay-icon'
                                            className='' /></span>To a friend</h6>
                                        <p>Purchase a book for a friend to pick up or deliver.</p>
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

export default Payforward;
