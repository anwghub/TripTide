import { StarIcon } from '@heroicons/react/24/outline';
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
            <div className='relative w-[100%] h-[20rem] overflow-hidden'>
                <Image src={`${image}`} alt="name" layout='fill' className='transform object-cover transition-all duration-700 scale-100 hover:scale-125' />
            </div>
            <div className='p-[1.4rem]'>
                <div className='flex flex-col items-center justify-center space-x-1'>
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                    <StarIcon className='text-orange-500 w-[1rem] h-[1rem]' />
                </div>
                <h1 className='mt-[0.4rem] text-[20px] text-black capitalize font-bold'>{name}</h1>
                <p className='text-[15px] text-black opacity-700 mt-[0.4rem]'>{city}</p>
                <div className='flex items-center justify-between mt-[0.4rem]'></div>
                <div>
                    
                </div>
            </div>

        </div>
    )
}

export default HotelCard