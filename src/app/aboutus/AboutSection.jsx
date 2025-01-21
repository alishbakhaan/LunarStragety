import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <div>
            <div className='max-w-6xl m-auto p-10'>
                <h1 className='font-product text-2xl lg:text-5xl font-bold m-auto max-w-lg text-center' >Make a Difference For Your Business!</h1>
                <div className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className='md:text-justify'>
                        <p className='text-xl font-medium py-4'>
                            We understand that not every company has an in-house department that is always updated and tracks the algorithms, trends, and changes within digital marketing, but we strongly believe every company should have somebody to do so!
                        </p>
                        <p className='text-xl font-medium pt-4'>
                            Therefore, we started Lunar Strategy digital marketing agency – to offer companies solutions that are completely customized to fit their business needs and goals.
                        </p>
                        <p className='text-xl font-medium pt-4'>
                            We tailor high-performing marketing strategies intended to serve and benefit your company long term.
                        </p>
                        <p className='text-xl font-medium pt-4'>
                            Lunar Strategy is a professional digital marketing agency with a highly motivated team.
                        </p>
                    </div>
                    <div>
                        <Image
                            src={'/about (1).svg'}
                            width={500}
                            height={500}
                            alt='image'
                            className='object-cover w-full h-full'
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-20">                
                    <div>
                        <Image
                            src={'/about (2).svg'}
                            width={500}
                            height={500}
                            alt='image'
                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='md:text-justify'>
                        <p className='text-xl font-medium py-4'>
                           Most of us have profound hands-on experience working with and for Google and Google Ads directly. Our marketing masters also have experience with Facebook Ads and SEO.
                        </p>
                        <p className='text-xl font-medium pt-4'>
                        Our team lives and breathes innovative, quick, and smart digital marketing solutions. We want to help as many businesses as possible to find new potential customers, reengage with old ones to reach far beyond growth expectations.
                        </p>
                        <p className='text-xl font-medium pt-4'>
                        Book a meeting with us today, free of charge, and we’ll talk about how we can implement a thorough and solid marketing strategy.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection