import PurpleBg from '@/components/PurpleBg'
import Image from 'next/image'
import React from 'react'

const Booking = () => {
  return (
    <>
      <PurpleBg
        content={
          <>
            <div className='max-w-7xl mx-auto px-10 sm:px-20 py-40'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-center">
                <div>
                  <div className='bg-gradient-to-r from-[#ffff] h-1 w-60 max-w-20 mx-auto md:mx-0 '></div>
                  <h1 className='font-product font-bold text-white text-4xl leading-normal tracking-wide pt-5'>Book A Free Digital  Marketing Consultation</h1>
                </div>
                <div className='space-y-4' >
                  <input className='rounded-full w-full py-4 px-8' type="email" name="" id="" placeholder='Your Email' />
                  <button className='bg-[#32046B] text-white rounded-full w-full py-4 px-8'>Book my free meeting</button>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>

  )
}

export default Booking  