import HeroComponent from '@/components/HeroComponent'
import React from 'react'
import Blogs from './Blogs'
import SvgSection from '@/components/SvgSection'

const page = () => {
  return (
    <div>
        <HeroComponent head={'Lunar Blog'} para={'Digital Marketing Articles'}/>
        <Blogs/>
        <SvgSection/>
    </div>
  )
}

export default page