import React from 'react'
import HotelCard from './Helper/HotelCard';

const Hotels = () => {
  return (
    <div className='pt-[4rem] bg-gray-200 pb-[4rem]'>
        <h1 className='heading'>Best Hotel</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-center w-[80%] mx-auto mt-[4rem]'>
            <div data-aos="fade-left">
                <HotelCard 
                name="hotel CityLight" 
                city="New York" 
                price="$123" 
                reviewNumber="21" 
                image='/images/h1.png' 
                />
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
                <HotelCard 
                name="hotel Neomi" 
                city="Japan" 
                price="$123" 
                reviewNumber="40" 
                image='/images/h2.png'/>
            </div>
            <div data-aos="fade-right" data-aos-delay="600">
                <HotelCard 
                name="hotel Miniso" 
                city="South Korea" 
                price="$123" 
                reviewNumber="17" 
                image='/images/h3.png' 
                />
            </div>
            <div data-aos="fade-left" data-aos-delay="900">
                <HotelCard 
                name="hotel Galaxy" 
                city="India" 
                price="$123" 
                reviewNumber="56" 
                image='/images/h4.png' 
                />
            </div>
            <div data-aos="zoom-in" data-aos-delay="1200">
                <HotelCard 
                name="hotel London High" 
                city="England" 
                price="$123" 
                reviewNumber="19" 
                image='/images/h5.png' 
                />
            </div>
            <div data-aos="fade-right" data-aos-delay="1500">
                <HotelCard 
                name="hotel Croco" 
                city="Australia" 
                price="$123" 
                reviewNumber="30" 
                image='/images/h6.png' 
                />
            </div>
        </div>
    </div>
  )
}

export default Hotels