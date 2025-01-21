import HeroComponent from '@/components/HeroComponent'
import React from 'react'
import Speciality from './Speciality'
import SvgSection from '@/components/SvgSection'

const page = () => {
  return (
    <div>
           <HeroComponent head={'Lunar Specialists'} para={'Meet the awesome team behind Lunar Strategy.'}/>
           <Speciality/>
           <SvgSection/>
    </div>
  )
}

export default page