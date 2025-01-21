import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Card = ({para, head, image}) => {
    return (
        <div>
            <div className=' bg-[#FAF6FF] border border-white rounded-[30px] p-10 text-black shadowing'>
                <Image
                    src={image}
                    width={80}
                    height={80}
                    alt='image'
                    className='object-contain'
                />
                <h1 className='font-product text-xl md:text-3xl font-bold leading-normal tracking-tight pt-10 pb-4'>{head}</h1>
                <p className='text-sm md:text-base pb-10 text-black text-opacity-40 text-justify'>
                    {para}
                </p>
                <Link href={'/'}>
                    <button className='w-full justify-center inline-flex bg-[#7C14FD] text-white items-center gap-4 font-semibold rounded-2xl px-4 sm:px-8 py-3'>
                        Book a free 30 minute meeting
                    </button>
                </Link>
            </div>
        </div>
    )
}



const Services = () => {
    return (
        <div className="relative">
            <div className='md:max-w-7xl md:mx-auto pb-24 px-10'>
                <div className="grid md:grid-cols-2 gap-10 justify-center ">

                    <div>
                    <div className='relative mb-10'>
                    <Card 
                    image={'/promotion.svg'}
                    head={'Facebook Marketing'}
                    para={'Facebook Marketing is a simple, yet powerful marketing platform that allows businesses to market their products and services through the biggest social media platforms (including Instagram as part of Facebook). We offer a range of marketing services including ad campaigns for increasing brand awareness, promotions, customer loyalty, building your social media following, and much more.'}
                    />
                    </div>
                    <Card
                     image={'/promotion.svg'}
                     head={'Google Marketing'}
                     para={'Google gets over 3.5 billion searches per day and with Google Ads you increase your visability significantly. It is the platform that allows you to drive qualitative traffic and good-fit customers, to your business while theyre searching for products and services. With Google Ads, you can boost your website traffic, receive more phone calls, and increase your in-store visits and more.'}
                    />
                    </div>

                    <div>
                    <div className='relative md:mt-40 mb-10'>
                    <Card
                     image={'/startup.svg'}
                     head={'Search Engine Optimization'}
                     para={'Search engine optimization is the process behind the making your website easy to find. Our SEO experts will help you rank higher in search engines and drive more traffic to your site organically. This is the bread and butter of better marketing, where you can influence how many sales can be generated for a lower cost. We make sure your content is aligned with the requirements of SEO.'}
                    />
                    </div>
                    <Card
                     image={'/writer.svg'}
                     head={'Web Content'}
                     para={'Do you need a content update on your site? Perhaps you are adding information to your website or building it from scratch? Professionally created web content, which is highly informative, well structured, and optimized for search engines is crucial for any web page. These factors not only make the content look great, but are also important for a high ranking among the search results. We also offer our clients continuous web content like blog posts, listicles and similar'}
                    />
                    
                    </div>
                                   
                </div>

            </div>

        </div>
    )
}

export default Services