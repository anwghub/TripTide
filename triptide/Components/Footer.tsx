import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='pb-[2rem] pt-[7rem] bg-gray-100 '>
            <div className='w-[80%] mx-auto flex flex-col md:flex-row lg:flex-row justify-around gap-10 border-b-2 border-gray-300 pb-10'>
                {/* first */}
                <div>
                    <h1 className='footer__heading'>Support</h1>
                    <div className='flex flex-col gap-[1rem]'>
                        <a className='footer__link' href="#">Help Center</a>
                        <a className='footer__link' href="#">Safety Information</a>
                        <a className='footer__link' href="#">Cancellation options</a>
                        <a className='footer__link' href="#">Medical Support</a>
                    </div>
                </div>
                {/* second */}
                <div>
                    <h1 className='footer__heading'>Company</h1>
                    <div className='flex flex-col gap-[1rem]'>
                        <a className='footer__link' href="#">About us</a>
                        <a className='footer__link' href="#">Community Blog</a>
                        <a className='footer__link' href="#">Careers</a>
                        <a className='footer__link' href="#">Terms of Services</a>
                        <a className='footer__link' href="#">Privacy Policy</a>
                    </div>
                </div>
                {/* third */}
                <div>
                    <h1 className='footer__heading'>Contact</h1>
                    <div className='flex flex-col gap-[1rem]'>
                        <a className='footer__link' href="#">Partnerships</a>
                        <a className='footer__link' href="#">FAQ</a>
                        <a className='footer__link' href="#">Get in Touch</a>

                    </div>
                </div>
                <div>
                    <h1 className='footer__heading'>Social</h1>
                    <div className='flex items-center space-x-4 text-white text-[1.3rem] gap-[1rem]'>
                        <div className='footer__icon bg-blue-500'>
                            <FaFacebookF />
                        </div>
                        <div className='footer__icon bg-purple-400'>
                            <FaInstagram />
                        </div>
                        <div className='footer__icon bg-blue-900'>
                            <FaSquareXTwitter />
                        </div>
                        <div className='footer__icon bg-red-700'>
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[80%] mx-auto pt-10 text-center'>
                <p className='text-gray-600 text-sm'>© Triptide 2025. All rights reserved.</p>
                <Image src='/images/pay.svg'
                alt='pay'
                width={230}
                height={230}
                className='object-contain sm:ml-auto'/>
            </div>
        </div>
    )
}

export default Footer