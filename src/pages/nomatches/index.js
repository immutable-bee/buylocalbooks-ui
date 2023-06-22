import React from 'react';
import styles from './nomatches.module.scss';
import Image from 'next/image';
// import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
const nomatches = () => {
    var data = [
        {
            name: 'Bookstore Seattle',
            email: 'contact@shop1.com'
        },
        {
            name: 'Bookstore Portland',
            email: 'contact@store2.com'
        },
        {
            name: 'Bookstore New York',
            email: 'contact@shop3.com'
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
                            <div className='col-md-12 p-0 px-md-2'>
                                <div className={styles.no_matches}>
                                    <div className={styles.emoji}>
                                        <Image
                                            src="./images/icons/emoji_icon.svg"
                                            width={28}
                                            height={28}
                                            className=''
                                            alt="icon"
                                        />
                                    </div>
                                    <div className={styles.matches_info}>
                                        <h4>No matches found for ‘Life of Pi’...</h4>
                                        <p>
                                            These stores below would love to connect you with the book you are seeking!

                                        </p>
                                        <p className='m-0'>They will take in consideration of your budget and book condition preferences.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* ************ */}
                        <div className='row'>
                            <div className='col-md-12 px-0 px-md-2'>
                                <div className={styles.store_lifepi}>
                                    <h5 className='m-0'>Stores who have ‘Life of Pi’</h5>
                                    <h6 className='m-0'>See All</h6>
                                </div>
                            </div>

                            {data.map((data, i) => {
                                return (
                                    <div className='col-md-12 col-xl-4 px-0 px-md-2' key={i}>
                                        <div className={styles.store_settle}>
                                            <div className={styles.store_settle_content}>
                                                <div className={styles.store_settle_img}>
                                                    <Image
                                                        src="./images/icons/stores-icon.svg"
                                                        width={23}
                                                        height={23}

                                                        alt="stores_icon"
                                                    />
                                                </div>

                                                <div className={styles.store_info}>
                                                    <p className=''>{data.name}</p>
                                                    <h6 className='m-0'>{data.email}</h6>
                                                </div>
                                            </div>

                                            <div className={styles.stores_icon}>
                                                <div className={styles.attacjment_icon}>
                                                <button type='button' className='border-0 bg-transparent'>
                                                    <Image
                                                        src="./images/icons/black-attachment-icon.svg"
                                                        width={17}
                                                        height={17}

                                                        alt="Attachment_icon"
                                                    />
                                                    </button>
                                                </div>
                                                <div className={styles.attacjment_icon}>
                                                <button type='button' className='border-0 bg-transparent'>
                                                    <Image
                                                        src="./images/icons/black-call-icon.svg"
                                                        width={17}
                                                        height={17}

                                                        alt="call_icon"
                                                    />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default nomatches;
