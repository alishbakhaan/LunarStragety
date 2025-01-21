import Button from '@/components/Button'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import Services from './Services'
import PurpleBg from '@/components/PurpleBg'
import SvgSection from '@/components/SvgSection'
import ContactUs from './ContactUs'

const page = () => {
    return (
        <div>
            <HeroSection
                content={
                    <>
                        <h1 className="relative inline-block font-product text-3xl sm:text-5xl lg:text-6xl font-bold before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-4 before:bg-[#7C14FD] before:bg-opacity-20 before:-z-10">
                            Services
                        </h1>


                        <p className='text-sm sm:text-xl lg:text-2xl font-medium py-10 max-w-xl'>All our digital marketing services start with a free 30-minute consultation call where we find the best strategy towards reaching your goals.</p>
                        <Button button={'Contact Us'} color={'bg-[#7C14FD] text-white text-sm sm:text-xl lg:text-2xl'} icon={'hidden'} />
                    </>
                }
                image={'/services.svg'}
            />

            <Services />

            <PurpleBg
                content={
                    <>
                        <div className='max-w-6xl m-auto py-32 px-10'>
                            <h1 className='text-white text-2xl md:text-4xl font-bold text-center pb-10'>What Happens When I Hire Lunar Strategy?</h1>
                            <p className='text-white text-lg font-semibold text-center py-4'>
                                When you hire Lunar Strategy, you get an external digital marketing team that drives your entire digital marketing towards measurable results. The marketing strategy that we lay out is based on your company’s business needs and goals, and we keep an ongoing dialogue to stay updated. The work is planned three months at a time and is held together by a project manager from Lunar Strategy.
                            </p>
                            <p className='text-white text-lg font-semibold text-center py-4'>
                                The specialists who are part of the team are adjusted when needed, based on what the focus is. We have specialists within most aspects of digital marketing and ensure that you always have access to the expertise you need in order to succeed.
                            </p>
                            <p className='text-white text-lg font-semibold text-center pt-4'>
                                The starting point for all work is your business goals, which are translated into key figures that we measure and report on to you. This way, you get follow-up that has a clear connection to what you and the company want to get out of the investment you make in us. You get all this at a fixed monthly price that corresponds to approximately one employee
                            </p>
                        </div>
                    </>
                }
            />

            <ContactUs />

            <SvgSection />

        </div>
    )
}

export default page