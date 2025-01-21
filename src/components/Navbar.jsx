import React from 'react'
import { Volkhov } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
const volkhov = Volkhov({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Navbar = () => {
  return (
    <div className='px-4 sm:px-16 py-5 bg-white text-black fixed z-50 shadow-md flex items-center justify-between w-full'>
      <Image
        src={'/logo.svg'}
        width={150}
        height={150}
        alt='image'
        className='object-contain'
      />

      <div>
        <ul className='list-none hidden lg:inline-flex items-center gap-8 mx-10 text-lg font-semibold'>
          <Link href={'/'}> <li>Home</li> </Link>
          <Link href={'/services'}> <li>Services</li> </Link>
          <Link href={'/industry'}> <li>Industries</li> </Link>
          <Link href={'/aboutus'}> <li>About Us</li> </Link>
          <Link href={'/speciality'}> <li>Team Lunar</li> </Link>
          <Link href={'/blog'}> <li>Blog</li> </Link>
          <Link href={'/audit'}> <li>Free Audit</li> </Link>
        </ul>

        <Link href={'/'}>
          <button className='text-sm sm:text-lg font-semibold rounded-full border border-[#7C14FD] text-[#7C14FD] px-2 sm:px-5 py-2'>
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar