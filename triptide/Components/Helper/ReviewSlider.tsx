import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import ClientReview from './ClientReview';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const ReviewSlider = () => {
  return (
    <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={5000} centerMode={false} infinite={true} responsive={responsive} itemClass='item' >
        < ClientReview image='/images/user1.jpg' name='Ba Reum'/>
        < ClientReview image='/images/user2.jpg' name='Seong je'/>
        < ClientReview image='/images/user3.jpg' name='Ryu Sun'/>
        < ClientReview image='/images/user4.jpg' name='Da on'/>
    </Carousel>
  )
}

export default ReviewSlider