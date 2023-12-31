import React, { useState } from 'react';
import styles from './inputcomponent.module.scss';
import Image from 'next/image';
const Inputcomponent = () => {
  const [active, setActive] = useState('all');

  return (
    <div>
      <div>
        <section >
          <div className=''>
            <div className='flex mt-4 justify-center'>
              <div className=''>
                <div className='max-w-4xl'>
                  <h1 className='text-center text-sm sm:text-3xl font-semibold'>Welcome to local4books. Here you can view all of the newly stocked books</h1>
                </div>
              </div>
            </div>
            <div className='flex py-5 px-2 justify-center w-full items-center'>
              <div className='w-full px-3 max-w-6xl border-2 border-[#ffc71f] rounded-3xl'>
                <div className=" flex justify-between">
                  <input type="text" className=" px-2 rounded-full py-3 sm:py-4 border-none w-full focus:outline-none" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <ul className=" flex items-center " >
                    <button onClick={() => setActive('all')} className={` bg-white text-gray-600 rounded-full px-4 sm:px-10 font-medium sm:font-semibold py-1 sm:py-2   ${active == "all" && '!bg-[#978367] !text-white'} `} id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">Title</button>
                    <button onClick={() => setActive('profile')} className={`  rounded-full px-4 sm:px-10 font-medium sm:font-semibold py-1 sm:py-2   ${active == "profile" && '!bg-[#978367] !text-white'} `} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Author</button>
                  </ul>
                </div>
              </div>
              <div className='ml-3'>

                <button type="button" className='bg-[#9BCC2C] px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl'><div >
                
                  <svg class='text-white w-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

                </div></button>

              </div>
            </div>
            <div className='sm:flex justify-center'>
              <div className='px-3 sm:block sm:py-0 py-1 flex justify-center items-center'>
                <label className='text-sm min-w-fit font-normal'>ZIP CODE 1</label>
                <input className='w-full sm:w-auto focus:ring-1 focus:ring-[#ffc71f] focus:outline-none border border-gray-500 px-3 rounded-lg mx-2 py-2' type="text"></input>
              </div>
              <div className='px-3 sm:block sm:py-0 py-1 flex justify-center items-center'>
                <label className='text-sm min-w-fit font-normal'>ZIP CODE 1</label>
                <input className='w-full sm:w-auto focus:ring-1 focus:ring-[#ffc71f] focus:outline-none border border-gray-500 px-3 rounded-lg mx-2 py-2' type="text"></input>
              </div>
            </div>
          </div>
        </section>
        {/* end heading section */}

      </div>
   
    </div>
  );
}

export default Inputcomponent;
