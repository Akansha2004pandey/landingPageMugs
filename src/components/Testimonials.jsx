import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './ReviewsData';
import Quote from "../../public/images/blockquote.svg"
import Image from 'next/image';
const Testimonials = () => {
  return (
    <div>
       <div className='flex flex-col items-center justify-center pt-20 pb-20'>
       <div className='text-[65px] font-Poppins leading-97.5px tracking-3percent text-center font-semibold mb-3'>
           Testimonials
       </div>
       <div className='max-w-[800px] font-normal text-[21px] tracking-3percent leading-31.5px pb-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex dolor. Consequuntur repellat soluta f.</div>
       <section className="testimonial-container">
      

      <div className="slider-container">
        <blockquote>
        <Image src={Quote} alt="Logo" width={100} className="m-2 top-quote quote" />
        <Image src={Quote} alt="Logo" width={100} className="m-2 bottom-quote quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
    </div>
    </div>
  )
}

export default Testimonials
