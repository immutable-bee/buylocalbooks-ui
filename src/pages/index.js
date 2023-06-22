import React from 'react';
import styles from './home.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
const Home = () => {
  return (
    <>
      <section className={styles.localbooks}>
        <div className={styles.bookstore}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6 col-lg-8 px-0 px-md-2'>
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
              <div className='col-12 col-md-6 col-lg-4 px-0 px-md-2'>
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
          </div>
        </div>
        {/* end nav sec */}

        <div className={styles.card_sec}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-4 px-0 px-md-2'>
                <div className={styles.cardinfo}>
                  <h6 className=''>
                    <span className=''>
                      <Image
                        src="./images/icons/message-icon.svg"
                        width={14}
                        height={14}
                        className="img-fluid"
                        alt="Picture of the author"
                      />
                    </span>
                    What is buy local books</h6>
                  <p>A community driven eccommerce bookstore for readers who value supporting book businesses and keeping local dollars local.</p>
                    <p>This is not a bargain online bookstore, rather this is a marketplace for bookstores selling their book to readers who appreciate books and quality service.</p>
                </div>
              </div>
              <div className='col-12 col-md-4 px-0 px-md-2'>
                <div className={styles.cardinfo}>
                  <h6 className=''>
                    <span className=''>
                      <Image
                        src="./images/icons/book-icon.svg"
                        width={14}
                        height={14}
                        className="img-fluid"
                        alt="Picture of the author"
                      />
                    </span>
                    How do you buy books?</h6>
                  <p>Search for your desired book and if a bookstore has the book in stock, you can 'request to buy' the book for pick up or delivery. </p>
                    <p>If no bookstore has the book you are looking for, then place a 'request a book' with the nearest bookstore to you and they will seek out the book on your behalf.</p>
                </div>
              </div>
              <div className='col-12 col-md-4 px-0 px-md-2'>
                <div className={styles.cardinfo}>
                  <h6 className=''>
                    <span className=''>
                      <Image
                        src="./images/icons/home.svg"
                        width={14}
                        height={14}
                        className="img-fluid"
                        alt="Picture of the author"
                      />
                    </span>
                    Doo you own bookstore?</h6>
                  <p>Apply to become a member of the booksellers network to reach more aspiring readers that are community driven.</p>
                </div>
              </div>
              <div className='col-12 col-md-4 col-lg-3 px-0 px-md-2 px-md-2'>

                <div className={styles.share_btn}>
                  <Link href="" className={`rounded-pill ${styles.dark_color}`}>Share this Page</Link>
                </div>
              </div>
              <div className='col-12 col-md-4 col-lg-3 px-0 px-md-2 px-md-2'>
                <div className={styles.apply_btn}>
                  <Link href="" className={`rounded-pill ${styles.dark_color}`}>Apply Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end card-info sec */}

      </section>



    </>
  );
}

export default Home;
