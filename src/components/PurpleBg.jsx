import Image from 'next/image'
import React from 'react'

const PurpleBg = ({ content }) => {
    return (
        <div className='bg-[#B070FF] relative' style={{ backgroundImage: `url(/background.svg)` }}>

            {content}
            <Image
                src={'/Oval1.svg'}
                width={400}
                height={400}
                alt='image'
                className='object-contain absolute top-0 left-0'
            />
            <Image
                src={'/Oval2.svg'}
                width={400}
                height={400}
                alt='image'
                className='object-contain absolute bottom-0 right-0'
            />

        </div>
    )
}

export default PurpleBg