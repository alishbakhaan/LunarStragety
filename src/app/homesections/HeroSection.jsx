import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='relative bg-[#FAF6FF] ' style={{ backgroundImage: `url(/background.svg)` }}>

                <div className="relative z-10 flex flex-col xl:flex-row gap-4 xl:gap-10 items-center justify-center p-32 px-10 sm:px-32 xl:px-0">
                    <div className='xl:max-w-2xl xl:ml-60'>
                    <h1 className='font-product text-3xl sm:text-5xl xl:text-7xl font-bold' ><span  className="relative inline-block before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-4 before:bg-[#7C14FD] before:bg-opacity-20 before:-z-10">We help you grow</span> your <span className='text-[#7C14FD]'> conversions.</span></h1>
                    <p className='text-sm sm:text-xl lg:text-2xl font-semibold pt-10'>Featured in leading publications around the world</p>
                    <Image
                        src={'/heroicon.svg'}
                        width={600}
                        height={600}
                        alt='image'
                        className='object-contain pb-10'
                    />
                  <Button button={'Contact Us'} color={'bg-[#7C14FD] text-white text-sm sm:text-xl lg:text-2xl'} icon={'hidden'}/>
                    </div>
                    <div>
                        <Image
                            src={'/herobg.svg'}
                            width={500}
                            height={500}
                            alt='image'
                            className='object-cover w-full h-full'
                        />
                    </div>
                </div>

       

            <svg className='absolute bottom-0 w-full ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 528" fill="none">
                <path d="M-104 198.5L19.5833 242.365C143.167 287.053 390.333 373.547 637.5 352.335C884.667 330.3 1131.83 198.5 1379 176.465C1626.17 155.253 1873.33 241.747 2120.5 231.45C2367.67 221.153 2614.83 109.947 2738.42 55.7853L2862 0.799988V528H2738.42C2614.83 528 2367.67 528 2120.5 528C1873.33 528 1626.17 528 1379 528C1131.83 528 884.667 528 637.5 528C390.333 528 143.167 528 19.5833 528H-104V198.5Z" fill="url(#paint0_radial_20_579)" />
                <defs>
                    <radialGradient id="paint0_radial_20_579" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1010 -451.5) rotate(90) scale(943 5305.27)">
                        <stop stopColor="#B880FF" stopOpacity="0" />
                        <stop offset="1" stopColor="#FAF6FF" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    )
}

export default HeroSection