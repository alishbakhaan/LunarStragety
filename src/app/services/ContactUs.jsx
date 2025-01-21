import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
    return (
        <div className='pt-32 pb-20 px-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-7xl md:mx-auto bg-white border-t-4 border-[#B070FF] rounded-lg px-10 xl:px-40 py-20 gap-10 shadowing'>
                <div>
                    <h1 className='font-product text-black md:max-w-2xl text-2xl md:text-4xl font-bold leading-snug max-w-md'>
                        Let us discuss your marketing strategy!
                    </h1>
                    <div className='bg-gradient-to-r from-[#7C14FD] h-1 w-60 max-w-20 my-8'></div>
                    <div className='space-y-4 text-black text-opacity-60 font-semibold text-lg'>
                    <p>Org.nr: 559264-1871</p>
                    <p>Lunar Holding LDA</p>
                    <p>info@lunarstrategy.com</p>
                    <p>+467-20478390</p>
                   </div>
                   <Image
                    width={150}
                    height={150}
                    src={'/icon.svg'}
                    className='object-contain py-6'
                    />
                    <Link href={'/'}>
                        <button className='text-center border-2 border-[#7C14FD] text-[#7C14FD] font-semibold rounded-2xl px-4 sm:px-8 py-3'>
                        Book a free consultation
                        </button>
                    </Link>
                </div>

                <div className='space-y-4 flex flex-col'>
                    <p className='text-2xl font-normal'>Or you can also contact us here</p>
                    <input className='bg-[#FAF6FF] px-6 py-4 rounded-xl block' placeholder='Name' type="text" name="" id="" />
                    <input className='bg-[#FAF6FF] px-6 py-4 rounded-xl block' placeholder='Email' type="email" name="" id="" />
                    <input className='bg-[#FAF6FF] px-6 py-4 rounded-xl block' placeholder='Subject' type="text" name="" id="" />
                    <textarea className='bg-[#FAF6FF] px-6 py-4 rounded-xl block w-full' placeholder='Message' cols={4} rows={2}></textarea>
                    <Link href={'/'}>
                        <button className='w-full justify-center inline-flex bg-[#7C14FD] text-white items-center gap-4 font-semibold rounded-2xl px-4 sm:px-8 py-3'>
                            Send
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactUs