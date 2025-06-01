import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : '-translate-x-full';

  // Prevent background scroll when nav is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]);

  return (
    <div
      className={`fixed transform transition-transform duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#200f31] ${navAnimation}`}
      aria-hidden={!nav}
    >
      <div className='w-screen h-screen flex flex-col items-center justify-center space-y-6 text-white text-xl'>
        <a href="#home" onClick={closeNav} className='nav-link-mobile'>Home</a>
        <a href="#tour" onClick={closeNav} className='nav-link-mobile'>Tour</a>
        <a href="#hotel" onClick={closeNav} className='nav-link-mobile'>Hotel</a>
        <a href="#review" onClick={closeNav} className='nav-link-mobile'>Review</a>
        <a href="#contact" onClick={closeNav} className='nav-link-mobile'>Contact</a>
        <a
          href="#book"
          onClick={closeNav}
          className="relative inline-flex items-center justify-center text-white font-semibold text-lg bg-gray-800 px-7 py-3 rounded-md overflow-hidden group"
        >
          <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out bg-purple-600 rounded-md z-0"></span>
          <span className="absolute inset-0 w-full h-full rounded-md opacity-20 bg-gradient-to-t from-transparent via-transparent to-gray-700 z-10"></span>
          <span className="relative z-20 text-md">Book Now</span>
        </a>
      </div>

      {/* Close Icon */}
      <div
        onClick={closeNav}
        className='absolute top-8 right-8 w-8 h-8 text-white cursor-pointer z-[1000000]'
        aria-label="Close navigation menu"
      >
        <XMarkIcon className="w-full h-full" />
      </div>
    </div>
  );
};

export default MobileNav;
