import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react';

interface Props{
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav,closeNav}:Props) => {
    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';
    return (
        <div className={`fixed transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#200f31] ${navAnimation}`}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <a href="#" className='nav-link-mobile'>Home</a>
                <a href="#" className='nav-link-mobile'>Tour</a>
                <a href="#" className='nav-link-mobile'>Hotel</a>
                <a href="#" className='nav-link-mobile'>Review</a>
                <a href="#" className='nav-link-mobile'>Contact</a>
                <a
                    href="#"
                    className="relative inline-flex items-center justify-center text-white font-semibold text-lg bg-gray-800 px-7 py-3 rounded-md overflow-hidden group"
                >
                    {/* Animated background on hover */}
                    <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out bg-purple-600 rounded-md z-0"></span>

                    {/* Optional overlay effect */}
                    <span className="absolute inset-0 w-full h-full rounded-md opacity-20 bg-gradient-to-t from-transparent via-transparent to-gray-700 z-10"></span>

                    {/* Text */}
                    <span className="relative z-20 text-md">Book Now</span>
                </a>
            </div>
            <div onClick={closeNav} className='absolute cursor-pointer top-[2rem] z-[1000000] right-[2rem] w-[2rem] h-[2rem] text-white '>
                <XMarkIcon className="w-full h-full"/>
            </div>
        </div>
    )
}

export default MobileNav