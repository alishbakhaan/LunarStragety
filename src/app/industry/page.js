
import HeroSection from '@/components/HeroSection'
import React from 'react'
import IndustryCard from './IndustryCard'
import PurpleBg from '@/components/PurpleBg'
import Link from 'next/link'
import Clients from './Clients'
import ContactUs from '../services/ContactUs'
import SvgSection from '@/components/SvgSection'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <HeroSection
                content={
                    <>
                        <h1  className="relative inline-block font-product text-3xl sm:text-5xl lg:text-6xl font-bold before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-4 before:bg-[#7C14FD] before:bg-opacity-20 before:-z-10">Industries & Expertise</h1>
                        <p className='text-sm sm:text-lg xl:text-2xl font-medium py-10'>
                            A specialist lead generation agency that guides you along the whole
                            road to growth. We help a wide range of B2B, SaaS, and E-commerce
                            clients optimizing and maximizing their digital marketing. We generate
                            unlimited leads for your business using a proven and unique strategy.
                            Along the way, you have a full overview.
                        </p>

                    </>
                }
                image={'/industry.svg'}
            />

            <IndustryCard />


            <PurpleBg
                content={
                    <>
                        <div className='max-w-3xl mx-auto py-32 px-10'>
                            <h1 className='text-white text-2xl md:text-4xl font-bold text-center'>Get a free digital marketing consultation</h1>
                            <p className='text-white text-base md:text-xl font-semibold text-center py-10'>Book a free 30-minute consultation with one of our experts. Absolutely no pressure, just a friendly rundown and some great advice.</p>
                            <div className='flex justify-center'>
                                <Link href={'/'}>
                                    <button className=' bg-[#32046B] text-white font-semibold rounded-full px-4 sm:px-8 py-3'>
                                        Yes, I would like some advice
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                }
            />

            <Clients />

            <PurpleBg
                content={
                    <>
                        <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center justify-center m-auto p-10'>
                            <div>
                                <Image
                                    width={300}
                                    height={300}
                                    src={'/industrybg.svg'}
                                    className='object-cover w-full'
                                />
                            </div>
                            <div >
                                <h1 className='text-white text-2xl md:text-4xl font-bold '>Get a FREE complete editorial guide for social media growth</h1>
                                <p className='text-white text-base md:text-xl font-normal leading-relaxed py-10'>Download your guide filled with clear, actionable tips on how your company can create successful organic content on social media. You'll find useful statistics as well as real-life examples and insights based on our own experiences as a social media agency.</p>
                                <Link href={'/'}>
                                    <button className=' bg-[#32046B] text-white font-semibold rounded-full px-4 sm:px-8 py-3'>
                                        Download Now
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </>
                }
            />

            <ContactUs />

            <div className='p-10 max-w-7xl mx-auto '>
                <h4 className='text-center text-xl font-semibold'>Trusted by companies around the world</h4>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center py-10 justify-center'>
                    <div className='flex justify-center'>
                    <Image
                        src={'/image 3.svg'}
                        width={150}
                        height={150}
                        alt='image'
                        className='object-contain'
                    />
                    </div>
                    <div className='flex justify-center'>
                    <Image
                        src={'/image 4.svg'}
                        width={150}
                        height={150}
                        alt='image'
                        className='object-contain'
                    />
                    </div>
                    <div className='flex justify-center'>
                    <Image
                        src={'/image 5.svg'}
                        width={150}
                        height={150}
                        alt='image'
                        className='object-contain'
                    />
                    </div>
                    <div className='flex justify-center'>
                    <Image
                        src={'/image 6.svg'}
                        width={200}
                        height={200}
                        alt='image'
                        className='object-contain'
                    />
                    </div>
                    <div className='flex justify-center'>
                    <Image
                        src={'/image 7.svg'}
                        width={80}
                        height={80}
                        alt='image'
                        className='object-contain filter'
                    />
                    </div>               
                </div>
            </div>

            <SvgSection />


        </div>
    )
}

export default page