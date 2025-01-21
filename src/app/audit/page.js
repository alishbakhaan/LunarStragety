
import PurpleBg from '@/components/PurpleBg'
import React from 'react'
import ContactUs from '../services/ContactUs'
import Lunar from '../homesections/Lunar'
import Slider from '@/components/Slider'
import AuditCard from './AuditCard'
import Hero from './Hero'


const page = () => {
  return (
    <div>
     < Hero/>

      <AuditCard/>
      
      <PurpleBg
        content={
          <>
            <div className='max-w-4xl m-auto py-32 px-10'>
              <h1 className='text-white text-4xl font-bold text-center pb-10'>Who are we?</h1>
              <p className='text-white text-lg font-semibold text-center py-4'>
                A growing team of digital marketing professionals, who most of us previously worked for the official Google Ads support team. We are certified and specialized in Google Ads, Merchant Center, Google Analytics, YouTube, and Display marketing.
              </p>
              <p className='text-white text-lg font-semibold text-center pt-4'>
                We are dedicated to giving companies cost-effective, high-quality marketing support that we know they need. Through our tailored digital marketing strategies, we help companies reach their business goals.
              </p>
            </div>
          </>
        }
      />

      <ContactUs />

      <PurpleBg
        content={
          <>
            <div className="grid lg:grid-cols-3 items-center gap-10 p-20 overflow-hidden">
              <div className='max-w-md lg:ml-auto'>
                <div className='bg-gradient-to-r from-[#ffff] h-1 w-60 max-w-20 md:mx-auto md:mx-0 '></div>
                <h1 className='font-product font-bold text-white text-2xl md:text-5xl leading-normal tracking-wide pt-5'>Digital Marketing Articles</h1>
              </div>
              <div className="lg:col-span-2 max-w-6xl mx-auto lg:-mr-44">
                <Slider />
              </div>
            </div>
          </>}
      />

      <Lunar />

    </div>
  )
}

export default page