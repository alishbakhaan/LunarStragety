import PurpleBg from '@/components/PurpleBg'
import Slider from '@/components/Slider'
import React from 'react'

const Articles = () => {
    return (
        <div>
            <PurpleBg
                content={
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 p-10 lg:p-40 overflow-hidden">
                            <div className='max-w-md mx-auto lg:ml-auto'>
                            <div className='bg-gradient-to-r from-[#ffff] h-1 w-60 max-w-20 mx-auto md:mx-0 '></div>
                                <h1 className='font-product font-bold text-white text-2xl md:text-5xl text-center md:text-left leading-normal tracking-wide pt-5'>Digital Marketing Articles</h1>
                            </div>
                            <div className="lg:col-span-2 max-w-6xl mx-auto lg:-mr-44">
                                <Slider />
                            </div>
                        </div>
                    </>}
            />

        </div>
    )
}

export default Articles
