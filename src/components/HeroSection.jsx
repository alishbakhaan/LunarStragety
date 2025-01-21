import Image from 'next/image'
import React from 'react'

const HeroSection = ({content, image}) => {
    return (
        <div className='relative bg-[#FAF6FF] ' style={{ backgroundImage: `url(/background.svg)` }}>

                <div className="relative z-10 flex flex-col md:flex-row gap-4 xl:gap-10 items-center justify-between py-40 px-10 lg:px-40">
                    <div className='xl:max-w-[700px] xl:ml-36'>                  
                    {content}
                    </div>
                    <div>
                        <Image
                            src={image}
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