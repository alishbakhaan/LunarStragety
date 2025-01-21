import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="relative -mt-40 md:-mt-60 lg:-mt-80 ">
            {/* SVG Background */}
            <svg

                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 520"
                fill="none"
            >
                <path
                    d="M0 276.892L127.292 346.5C254.583 416.94 478.743 482.435 733.327 449C987.91 414.267 1272.92 311.625 1527.5 276.892C1782.08 243.457 2036.67 379.793 2291.25 363.562C2545.83 347.332 2800.42 172.043 2927.71 86.6707L3055 0V831L2927.71 995.5C2800.42 995.5 2545.83 995.5 2291.25 995.5C2036.67 995.5 1782.08 995.5 1527.5 995.5C1272.92 995.5 1018.33 995.5 763.75 995.5C509.167 995.5 254.583 995.5 127.292 995.5H0L0 276.892Z"
                    fill="#B070FF"
                />
            </svg>

            {/* Content */}
            <div className="bg-[#B070FF]">
                <div className="max-w-7xl mx-auto z-10 px-10 py-16 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 text-white">
                        {/* Logo and Contact Info */}
                        <div className="space-y-10">
                            <Image
                                src={'/logowhite.svg'}
                                width={200}
                                height={200}
                                className="object-contain"
                                alt="logo"
                            />
                            <p className="font-extralight text-white tracking-wider leading-loose">
                                REBORN STUDIO AB
                                <br />
                                Org.nr: 559264-1871
                                <br />
                                Lunar Holding LDA
                                <br />
                                info@lunarstrategy.com
                                <br />
                                +467-20478390
                            </p>
                            <div>
                                <Link href={'/'}>
                                    <Image
                                        src={'/favicon.svg'}
                                        alt="icon"
                                        width={150}
                                        height={150}
                                        className="object-contain"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div className="space-y-4">
                            <h1 className="text-2xl pb-5">Company</h1>
                            <ul className="font-extralight space-y-2">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Lunar Blog</li>
                                <li>Our Specialists</li>
                                <li>Contact Us</li>
                                <li>Privacy & Policy</li>
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div className="space-y-4">
                            <h1 className="text-2xl pb-5">Services</h1>
                            <ul className="font-extralight space-y-2">
                                <li>Digital Marketing</li>
                                <li>Free Audit</li>
                                <li>Google Ads</li>
                                <li>Cryptocurrency Marketing</li>
                                <li>SEO</li>
                                <li>SAAS Marketing</li>
                                <li>Website & SEO</li>
                            </ul>
                        </div>

                        {/* Podcast Section */}
                        <div className="space-y-4">
                            <h1 className="text-2xl">Podcast</h1>
                            <div className="bg-[#9A48FF] rounded-2xl w-full h-64"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ovals */}
            <div className="absolute bottom-0 right-0 left-0">
                <Image
                    src={'/Ovals1.svg'}
                    width={400}
                    height={400}
                    alt="oval left"
                    className="object-contain hidden md:block absolute bottom-0 left-0"
                />
                <Image
                    src={'/Ovals2.svg'}
                    width={400}
                    height={400}
                    alt="oval right"
                    className="object-contain hidden md:block absolute bottom-0 right-0"
                />
            </div>

        </div>
    );
};

export default Footer;
