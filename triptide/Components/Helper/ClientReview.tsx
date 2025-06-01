import React from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Props {
    image?: string;
    name?: string;
}

const ClientReview = ({ image, name }: Props) => {
    return (
        <div className='p-4'>
            <div>
                <Image
                    src={`${image}`}
                    alt="name"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto" />
            </div>
            <p className='mt-[2rem] text-[20px] text-gray-600 font-normal text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae recusandae dolore obcaecati dolorem eveniet quisquam voluptatum inventore non similique facilis libero, harum eos placeat veritatis!
            </p>
            <div className='mt-[2rem]'>
                <div className='flex w-[100%] items-center justify-center space-x-2'>
                    <StarIcon className="w-[1rem] h-[1rem] text-orange-500"/>
                    <StarIcon className="w-[1rem] h-[1rem] text-orange-500"/>
                    <StarIcon className="w-[1rem] h-[1rem] text-orange-500"/>
                    <StarIcon className="w-[1rem] h-[1rem] text-orange-500"/>
                    <StarIcon className="w-[1rem] h-[1rem] text-orange-500"/>
                </div>
                <h1 className='mt-[0.5rem] font-semibold text-center text-[18px] text-black'>{name}</h1>
                <p className='text-center text-black text-[15px] opacity-70'>Traveler</p>
            </div>
        </div>
    )
}

export default ClientReview