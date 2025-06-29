import React from 'react'
import DestinationSlider from './Helper/DestinationSlider'

const TopDestination = () => {
  return (
    <section id="tour">
      <div className='mt-[6rem] mb-[4rem]'>
        <h1 className='heading'>Top Destination</h1>
        <div className='mt-[4rem] -[80%] mx-auto'>
          <DestinationSlider />
        </div>
      </div>
    </section>

  )
}

export default TopDestination