import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const SvgSection = () => {
    return (
        <div className='relative pb-32'>
          
            <svg className='absolute top-0 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921 417" fill="none">
                <path d="M1925.68 87.3723L1803.31 131.237C1680.93 175.925 1436.18 262.419 1191.43 241.208C946.681 219.172 701.931 87.3723 457.181 65.3369C212.431 44.1254 -32.3195 130.619 -277.069 120.322C-521.82 110.025 -766.57 -1.18089 -888.945 -55.3425L-1011.32 -110.328V416.872H-888.945C-766.57 416.872 -521.82 416.872 -277.069 416.872C-32.3195 416.872 212.431 416.872 457.181 416.872C701.931 416.872 946.681 416.872 1191.43 416.872C1436.18 416.872 1680.93 416.872 1803.31 416.872H1925.68V87.3723Z" fill="url(#paint0_radial_24_24154)" />
                <defs>
                    <radialGradient id="paint0_radial_24_24154" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(822.573 -562.628) rotate(90) scale(943 5253.4)">
                        <stop stopColor="#B880FF" stopOpacity="0" />
                        <stop offset="1" stopColor="#FAF6FF" />
                    </radialGradient>
                </defs>
            </svg>

              <div className="relative flex flex-col xl:flex-row gap-10 items-center justify-between p-4 pt-40">
                <div className='text-center max-w-2xl mx-auto'>
                    <h1 className='font-product text-2xl sm:text-3xl md:text-5xl font-bold' >Why Lunar Strategy?</h1>
                    <p className='text-[#32046B] text-base md:text-2xl font-semibold py-10 leading-normal'>To get customers, it's imperative to be seen by the mass. Every successful company is unique and
                        needs contrasting digital marketing strategies. Book a meeting with us and we will help you find
                        the correct strategy for your company.</p>
                <Button button={'Book Free Meeting'} color={'bg-[#7C14FD] text-white text-sm sm:text-xl my-10'} icon={'stroke-white'} />
                </div>
                <div>
                    <Image
                        src={'/lunar.svg'}
                        width={600}
                        height={600}
                        alt='image'
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default SvgSection