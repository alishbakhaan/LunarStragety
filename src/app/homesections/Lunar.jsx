import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Lunar = () => {
    return (
        <div>
            <div className="flex flex-col xl:flex-row gap-10 items-center justify-between py-32 px-10 sm:px-32 xl:px-0">
                <div className='text-center max-w-2xl mx-auto'>
                    <h1 className='font-product text-3xl md:text-5xl font-bold' >Why Lunar Strategy?</h1>
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

export default Lunar