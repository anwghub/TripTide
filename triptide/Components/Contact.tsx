import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="pt-[5rem] pb-[4rem] bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[2rem] items-center">
        {/* Image Section */}
        <div data-aos="fade-right" data-aos-delay="600" className="flex justify-center">
          <Image
            src="/images/c1.png"
            alt="fly"
            width={500}
            height={300}
            className="object-contain p-4 border-radius-lg"
          />
        </div>

        {/* Text + Form Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-[30px] text-black font-bold">
            Get special offers and more from Traveler
          </h1>
          <p className="text-[18px] text-black opacity-70 mt-2">
            We are here to help you with your travel needs.
          </p>

          {/* Email Input & Button */}
          <div className="flex mt-6 w-full max-w-md border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 text-sm outline-none"
            />
            <button className="px-6 bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
