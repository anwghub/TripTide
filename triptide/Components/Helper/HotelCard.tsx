import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react'
import Image from 'next/image';

interface Props {
    image?: string;
    name?: string;
    city?: string;
    reviewNumber?: String;
    price?: string;
}

const HotelCard = ({ name, city, image, price, reviewNumber }: Props) => {
    return (
        <div className='cursor-pointer bg-white rounded-md '>
            <div className='relative w-[100%] h-[15rem] overflow-hidden'>
                <Image src={`${image}`} alt="name" layout='fill' className='transform object-cover transition-all duration-700 scale-100 hover:scale-125' />
            </div>
            <div className='p-[1.4rem]'>
                <div className='flex items-center justify-center space-x-1'>
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                </div>
                <h1 className='mt-[0.4rem] text-[20px] text-black capitalize font-bold'>{name}</h1>
                <p className='text-[15px] text-black opacity-700 mt-[0.4rem]'>{city}</p>
                <div className='opacity-60 w-[100%] h-[0.8px] mt-[1rem] bg-gray-800'></div>
                <div className='flex items-center mt-[0.5rem] space-x-3'>
                    <h1 className='border-[2px] rounded-md border-opacity-50 text-purple-800 font-bold px-3 py-1 border-purple-400'>4.8/5</h1>
                    <h1 className='text-[16px] text-black items-center space-x-4 font-bold flex'>
                        <span>Excellent</span>
                        <span className='text-[16px] text-black opacity-60 font-normal'>
                            ({reviewNumber} reviews)
                        </span>
                    </h1>
                </div>
                <h1 className='text-[15px] mt-[1rem] flex items-center space-x-3'>
                    <span className='text-[16px] text-black opacity-60' >Form: </span>
                    <span className='text-[15px] text-black opacity-70'>{price} </span>
                    <span className='text-[16px] text-black opacity-60'>/night</span>
                </h1>

            </div>

        </div>
    )
}

export default HotelCard