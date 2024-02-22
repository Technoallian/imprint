"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Navigation } from 'swiper/modules';
import Image from 'next/image';
import png1 from "/public/images/business1.png"
import png2 from "/public/Images/business1.png"
import png3 from "/public/Images/business1.png"
import png4 from "/public/Images/business1.png"

export default function Carousel() {
  return (
    <>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}

        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        // modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <div className='w-full h-[190px] rounded-[16px] overflow-hidden border-2 border-[#fff] hover:border-2 hover:border-[#F87B50]'>

            <Image src={png1} className='object-cover object-center w-full h-full' alt='image'/>
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[190px] rounded-[16px] overflow-hidden border-2 border-[#fff] hover:border-2 hover:border-[#F87B50]'>

            <Image src={png2} className=' object-cover object-center w-full h-full' alt='image'/>
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[190px] rounded-[16px] overflow-hidden border-2 border-[#fff] hover:border-2 hover:border-[#F87B50]'>

            <Image src={png3} className=' object-cover object-center w-full h-full' alt='image'/>
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[190px] rounded-[16px] overflow-hidden border-2 border-[#fff] hover:border-2 hover:border-[#F87B50]'>

            <Image src={png4} className=' object-cover object-center w-full h-full' alt='image'/>
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[190px] rounded-[16px] overflow-hidden border-2 hover:border-2 hover:border-[#F87B50]'>

            <Image src={png1} className=' object-cover object-center w-full h-full' alt='image'/>
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[190px] rounded-[16px] overflow-hidden border-2 border-[#fff] hover:border-2 hover:border-[#F87B50]'>

            <Image src={png2} className=' object-cover object-center w-full h-full' alt='image'/>
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[190px] rounded-[16px] overflow-hidden border-2 border-[#fff] hover:border-2 hover:border-[#F87B50]'>

            <Image src={png3} className=' object-cover object-center w-full h-full' alt='image'/>
          </div>
         
        </SwiperSlide>
            <SwiperSlide>
          <div className='w-full h-[190px] rounded-[16px] overflow-hidden border-2 border-[#fff] hover:border-2 hover:border-[#F87B50]'>

            <Image src={png4} className=' object-cover object-center w-full h-full' alt='image'/>
          </div>
         
        </SwiperSlide>
      </Swiper>
    </>
  );
}
