import HeroSection from '@/components/HeroSection'
import React from 'react'
import ContactUs from '../services/ContactUs'
import SvgSection from '@/components/SvgSection'
import AboutSection from './AboutSection'

const page = () => {
    return (
        <div>
            <HeroSection
                content={
                    <>
                        <h1 className=' font-product text-3xl sm:text-5xl lg:text-6xl font-bold ' > <span  className="relative inline-blockbefore:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-4 before:bg-[#7C14FD] before:bg-opacity-20 before:-z-10"> Consistency - Drive -</span> Curiosity - Passion​</h1>
                        <p className='text-sm sm:text-lg xl:text-2xl font-medium py-10'>In a constantly evolving and competitive digital world, it is imperative to stay on top and in the know, be highly visible among search results and feeds, and be responsive to your audience.</p>
                     
                    </>
                }
                image={'/aboutus.svg'}
            />
            <AboutSection/>
            <ContactUs/>
            <SvgSection/>
        </div>
    )
}

export default page