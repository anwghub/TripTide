import React from 'react'
import HotelCard from './Helper/HotelCard';

const Hotels = () => {
  return (
    <div className='pt-[4rem] bg-gray-200 pb-[4rem]'>
        <h1 className='heading'>Best Hotel</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-center w-[80%] mx-auto mt-[4rem]'>
            <div>
                <HotelCard name="hotel CityLight" city="New York" price="$123" reviewNumber="21" image='/images/h1.png' />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Hotels