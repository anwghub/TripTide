import React from 'react';
import Searchbox from './Helper/Searchbox';

const Hero = () => {
  return (
    <section id="home">
      <div className="relative w-full h-[88vh] overflow-hidden">
        {/* Background Video */}
        <video
          src="/images/Travel Vlog.mp4"
          autoPlay
          muted
          loop
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-50 z-10" />

        {/* Content */}
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="flex flex-col items-center justify-center text-white text-center">
            <div data-aos="fade-up">
              <h1 className="text-[25px] md:text-[35px] lg:text-[45px] tracking-[0.7rem] mb-4">
                Start your travel journey with Triptide
              </h1>
              <h2 className='text-[15px] md:text-[15px] tracking-[0.4rem] mb-4' >
                where adventure begins, and memories are made.</h2>
              <p className="text-[18px] md:text-[16px] font-normal mb-6">
                Get the best prices here
              </p>
            </div>

            <Searchbox />
            <a href="#_" className='rounded bg-blue-500 text-white overflow-hidden group px-14 py-3 flex relative hover:bg-gradient-to-r justify-center bg-purple-700 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300'>
              <span className='absolute right-0 w-64 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease-linear'></span>
              <span>Search</span>
            </a>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Hero;
