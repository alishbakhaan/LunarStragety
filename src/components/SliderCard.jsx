import React from 'react'
import Button from './Button'

const SliderCard = ({head, para}) => {
  return (
    <div className='bg-[#9642FF] rounded-[30px] p-10 text-white w-[250px] sm:w-full'>
       <h1 className='font-product text-xl md:text-4xl font-bold leading-normal'>{head}</h1> 
       <p className='text-sm md:text-base py-6 text-white text-opacity-60'>{para}</p>
       <Button button={'Read More'} color={'bg-white text-black'} icon={'stroke-black'}/>
    </div>
  )
}

export default SliderCard