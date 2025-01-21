import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const Card = () => {
    return (
        <div>
            <div className='bg-[#FAF6FF] border border-white rounded-[30px] p-10 text-black sm:max-w-md max-w-full shadowing text-center'>
                <div className="border-8 border-[#B070FF] rounded-full p-2 bg-white max-w-40 mx-auto h-40 -mt-32">
                    <Image
                    src={'/avatar.svg'}
                    width={400}
                    height={400}
                    alt='avatar'
                    className='object-contain'
                    />
                </div>
                <h1 className='font-product text-xl md:text-3xl font-bold pt-10 sm:pt-16'>Tim Haldorsson</h1>
                <p className='text-sm md:text-xl py-4'>Paid Search Manager</p>
                <p className='text-[#B070FF] text-xl font-medium'>Gothenburg, Sweden</p>
                <p className='text-[#B070FF] text-xl font-medium pb-10'>tim@lunarstrategy.com</p>

                <Link href={'/'}>
                    <button className='inline-flex bg-[#B070FF] text-white items-center gap-4 font-semibold rounded-2xl px-4 sm:px-10 py-3'>
                        Book a free meeting
                        <svg className='stroke-white' xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
                            <path d="M1.79297 1.10352L6.79297 6.10352L1.79297 11.1035" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}



const Speciality = () => {
    return (
        <div className="relative">
            <div className='md:max-w-7xl md:mx-auto pb-24 pt-20 md:pt-0 px-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 justify-center gap-y-40 md:gap-y-60">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>
               
            </div>


        </div>
    )
}

export default Speciality