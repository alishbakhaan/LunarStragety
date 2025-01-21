import Link from 'next/link'
import React from 'react'

export const Card = () => {
    return (
        <div>
            <div className='bg-[#FAF6FF] border border-white rounded-[30px] p-4 sm:p-10 text-black shadowing'>
                <h1 className='font-product text-xl md:text-3xl font-bold leading-normal tracking-tighter pt-10'>Top 5 SaaS Businesses – August 2021</h1>
                <p className='text-sm md:text-base py-10'>Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS</p>
                <Link href={'/'}>
                    <button className='inline-flex bg-[#B070FF] text-white items-center gap-4 font-semibold rounded-2xl px-4 sm:px-8 py-3'>
                        Read More
                        <svg className='stroke-white' xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
                            <path d="M1.79297 1.10352L6.79297 6.10352L1.79297 11.1035" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}



const Blogs = () => {
    return (
        <div className="relative">
            <div className='md:max-w-[88rem] md:mx-auto space-y-10 pb-24 px-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-30 justify-center ">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-20 justify-center ">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 justify-center ">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

        </div>
    )
}

export default Blogs