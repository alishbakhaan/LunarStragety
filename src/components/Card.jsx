import Image from 'next/image'
import React from 'react'

const Card = ({head, para, img, wid, style, number}) => {
    return (
        <div>
            <div className="relative max-w-4xl flex flex-col sm:flex-row gap-10 items-center shadow-2xl shadow-[#7d14fd38] bg-white rounded-xl p-10">
                <div>
                    <Image
                        src={img}
                        width={wid}
                        height={1000}
                        alt='image'
                        className='object-cover bg-cover'
                    />
                </div>
                <div>
                    <h1 className='font-product text-[#7C14FD] text-2xl lg:text-4xl font-bold'>{head}</h1>
                    <div className='bg-gradient-to-r from-[#7C14FD] h-1 w-60 max-w-20 my-4'></div>
                    <p className='text-base sm:text-lg font-extrabold'>{para}</p>
                </div>

                <span className={`${style} text-[#7C14FD] text-6xl xl:text-9xl font-extrabold opacity-10 absolute top-0 xl:-top-16`}>{number}</span>
            </div>
        </div>
    )
}

export default Card