import Link from 'next/link'
import React from 'react'

const Button = ({ button, color, icon }) => {
    return (
        <>
            <Link href={'/'}>
                <button className={`${color} inline-flex items-center gap-4  font-semibold rounded-[20px] px-4 sm:px-8 py-5 shadow-xl shadow-[#7d14fdb6]`}>
                    {button}
                    <svg className={`${icon}`} xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
                        <path d="M1.79297 1.10352L6.79297 6.10352L1.79297 11.1035" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </Link>
        </>
    )
}

export default Button