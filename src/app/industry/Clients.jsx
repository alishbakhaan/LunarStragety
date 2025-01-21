import Image from 'next/image'
import React from 'react'

const Clients = () => {
    return (
        <div>
            <div className='max-w-[1400px] m-auto pt-40 pb-32'>
                <h1 className='font-product text-xl sm:text-3xl lg:text-5xl text-center font-bold'>What do clients think about us?</h1>
                <div className='bg-gradient-to-r from-[#7C14FD] h-1 w-60 max-w-20 mx-auto my-8'></div>
                <div className="bg-white rounded-2xl m-10">
                    <div className="max-w-5xl m-auto grid md:grid-cols-3 gap-10  items-center pt-20 pb-10 px-10">
                        <div>
                            <Image
                                src={'/testimonial.svg'}
                                width={250}
                                height={250}
                                alt='image'
                                className='object-contain'
                            />
                        </div>
                        <div className="col-span-2">
                            <p className='text-sm sm:text-xl md:text-2xl font-semibold leading-10 text-[#32046B] tracking-wide'>Lunar Strategy helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.</p>
                            <p className='text-[#7C14FD] text-xs sm:text-base md:text-2xl font-semibold pt-16 pb-10'>— Kimmo Hakonen - Skrum Master at DaGear AB</p>
                        </div>
                    </div></div>
            </div>
        </div>
    )
}

export default Clients