import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
        <div className='w-[80% mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
            <div>
                <Image 
                src="/images/c1.png"
                alt='fly'
                width={200}
                height={200}
                className='object-contain mx-auto p-[1rem]'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[30px] text-black font-bold'>Get special offers and more from Traveler</h1>
                <p className='text-[18px] text-black opacity-70 mt-[0.5rem]'>We are here to help you with your travel needs.</p>
                
            </div>
        </div>
    </div>
  )
}

export default Contact