import React from 'react'

const AuditCard = () => {
    return (
        <div className='relative lg:mb-80'>
            <div className='relative z-40 flex lg:flex-row flex-col md:max-w-6xl items-end gap-10 -mt-[20%] mx-auto p-10'>
                <div className='bg-[#FAF6FF] border border-white rounded-[30px] p-6 sm:p-10 lg:max-w-md shadowing'>
                    <h1 className='text-[#7C14FD] text-2xl font-bold py-4'>Step 01</h1>
                    <p className='text-sm md:text-xl font-semibold text-justify py-4'>
                        You can get a free audit by us where we go through your current online presence. Once we have the information
                        from your end, we can set up ideas and a strategy to improve your positioning. You will get a report of, for example,
                        search terms that your website is shown for on Google, how people reach your website, and from which type of device
                        people visited your. We only need your website name and contact details.
                    </p>
                </div>

                <div className='bg-[#FAF6FF] border border-white rounded-[30px] p-6 sm:p-10 shadowing lg:-mb-32'>
                    <h1 className='text-[#7C14FD] text-2xl font-bold py-4'>Step 02</h1>
                    <p className='text-sm md:text-xl font-semibold text-justify py-4'>
                        You will then receive a summary to your email inbox within 24-48 hours, where we lay out the methods of improving your
                        online marketing and presence. No worries, no strings attached. If you do however like to proceed in collaboration with us,
                        please let us know as soon as possible.
                    </p>
                </div>
            </div>

            <svg className='absolute top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1422 384" fill="none">
                <path d="M-355.483 343.296C-355.483 343.296 -158.03 20.7147 32.6435 3.18655C223.317 -14.3416 219.848 241.822 407.21 273.182C594.572 304.542 616.714 114.051 782.087 128.626C947.46 143.201 908.799 268.378 1068.71 331.48C1228.62 394.581 1421.72 381.032 1421.72 381.032"
                    stroke="#B070FF" strokeWidth="3" strokeDasharray="16 16" />
            </svg>



        </div>
    )
}

export default AuditCard