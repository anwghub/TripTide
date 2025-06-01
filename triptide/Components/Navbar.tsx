import React from 'react'
import Image from "next/image";
import { Bars3Icon } from '@heroicons/react/24/outline';

interface Props{
    openNav: () => void;
}

const Navbar = ({openNav}:Props) => {
    return (
        <div className='w-[100] bg-white'>
            <div className='flex w-[80%] mx-auto items-center justify-between h-[12vh]'>
                <div className='relative w-[70px] cursor-pointer h-[70px] lg:w-[100px] lg:h-[100px] object-contain'>
                    <Image src="/images/logo.png" alt="logo" layout="fill" />
                </div>
                <div className='flex items-center space-x-12'>
                    <a href="#" className='nav-link'>Home</a>
                    <a href="#" className='nav-link'>Tour</a>
                    <a href="#" className='nav-link'>Hotel</a>
                    <a href="#" className='nav-link'>Review</a>
                    <a href="#" className='nav-link'>Contact</a>
                    <a
                        href="#"
                        className="relative lg:inline-flex items-center justify-center text-white font-semibold text-lg bg-gray-800 px-7 py-3 rounded-md overflow-hidden group"
                    >
                        {/* Animated background on hover */}
                        <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out bg-purple-600 rounded-md z-0"></span>

                        {/* Optional overlay effect */}
                        <span className="absolute inset-0 w-full h-full rounded-md opacity-20 bg-gradient-to-t from-transparent via-transparent to-gray-700 z-10"></span>

                        {/* Text */}
                        <span className="relative z-20 text-md">Book Now</span>
                    </a>

                    <Bars3Icon onClick={openNav} className="w-8 h-8 lg:hidden text-blue-800" />


                </div>
            </div>
        </div>
    )
}

export default Navbar