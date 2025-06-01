import React, { useState } from 'react'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
    openNav: () => void
}

const Navbar = ({ openNav }: Props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className='w-full bg-white shadow-md fixed top-0 z-50'>
            <div className='flex w-[90%] mx-auto items-center justify-between h-[8vh] lg:h-[12vh]'>
                <div className='relative w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]'>
                    <Image src="/images/logo.png" alt="logo" fill className="object-contain cursor-pointer" />
                </div>

            {/* Desktop Nav */}
            <div className='hidden lg:flex items-center space-x-12'>
                <a href='#home' className='nav-link'>Home</a>
                <a href='#tour' className='nav-link'>Tour</a>
                <a href='#hotel' className='nav-link'>Hotel</a>
                <a href='#review' className='nav-link'>Review</a>
                <a href='#contact' className='nav-link'>Contact</a>
                <a
                    href='#'
                    className='relative inline-flex items-center justify-center text-white font-semibold text-lg bg-gray-800 px-7 py-3 rounded-md overflow-hidden group'
                >
                    <span className='absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out bg-purple-600 rounded-md z-0'></span>
                    <span className='absolute inset-0 w-full h-full rounded-md opacity-20 bg-gradient-to-t from-transparent via-transparent to-gray-700 z-10'></span>
                    <span className='relative z-20 text-md'>Book Now</span>
                </a>
            </div>

            {/* Mobile Icon */}
            <div className='lg:hidden'>
                {mobileMenuOpen ? (
                    <XMarkIcon onClick={() => setMobileMenuOpen(false)} className='w-8 h-8 text-blue-800' />
                ) : (
                    <Bars3Icon onClick={() => setMobileMenuOpen(true)} className='w-8 h-8 text-blue-800' />
                )}
            </div>
        </div>

      {/* Mobile Menu */ }
    {
        mobileMenuOpen && (
            <div className='lg:hidden flex flex-col space-y-6 px-6 pb-6 pt-4 bg-white shadow-md'>
                <a href='#home' className='nav-link'>Home</a>
                <a href='#tour' className='nav-link'>Tour</a>
                <a href='#hotel' className='nav-link'>Hotel</a>
                <a href='#review' className='nav-link'>Review</a>
                <a href='#contact' className='nav-link'>Contact</a>
                <a
                    href='#'
                    className='bg-gray-800 text-white font-semibold py-2 px-5 rounded-md text-center'
                >
                    Book Now
                </a>
            </div>
        )
    }
    </div >
  )
}

export default Navbar
