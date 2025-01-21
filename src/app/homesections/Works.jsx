import Card from '@/components/Card'
import React from 'react'

const Works = () => {
    return (
        <div >
            <div className='max-w-7xl mx-auto pb-40'>
                <h1 className='font-product text-2xl sm:text-4xl lg:text-[52px] text-center font-bold'>How it works</h1>
                <div className='bg-gradient-to-r from-[#7C14FD] h-1 w-60 max-w-20 mx-auto my-8'></div>

                <div className="space-y-6 lg:space-y-0 px-10 xl:px-0 md:pt-10">
                    <div className='relative z-40 flex justify-start'>
                        <Card 
                        img={'/Frame.svg'}
                        style={'left-0 xl:-left-8'}
                        number={'01'}
                        wid={600}
                        head={'Goal'}
                        para={'To help your company grow, we want to understand your goals. With that, we can provide you with a complete road map towards achieving them.'}
                        />
                    </div>
                    <div className='relative z-30 flex justify-end'>
                        <Card 
                        img={'/Web.svg'}
                        style={'right-0 xl:-right-8'}
                        number={'02'}
                        wid={1000}
                        head={'Competitors'}
                        para={'Everybody wants to be the best in their field. To achieve success, we audit your competitors and find out what is working and what is not. All this to help you save time, money, and effort on things that do not work and focus on what does.'}
                        />
                    </div>
                    <div className='relative z-20 flex justify-start'>
                        <Card 
                        img={'/Settings.svg'}
                        style={'left-0 xl:-left-8'}
                        number={'03'}
                        wid={1000}
                        head={'Strategy'}
                        para={'Understanding the steps needed to beat your competitors is essential when understanding the length of the project, and how we will effectively tackle your digital marketing.​ We also make sure to get you the most value for your money.​'}
                        />
                    </div>
                    <div className='relative z-10 flex justify-end'>
                        <Card 
                        img={'/Success.svg'}
                        style={'right-0 xl:-right-8'}
                        number={'04'}
                        wid={1000}
                        head={'Launch'}
                        para={'Launching everything into action will be the start of your new marketing strategy. Taking every step we have planned and carefully following the laid-out road map to reach your business goals.​'}
                        />
                    </div>
                   
                </div>

            </div>



        </div>
    )
}

export default Works