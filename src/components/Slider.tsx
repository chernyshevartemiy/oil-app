import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { Slide } from '../components/Slide';
import slideOne from '../assets/images/slideOne.jpg';
import slideTwo from '../assets/images/slideTwo.jpg';
import slideThree from '../assets/images/slideThree.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Slider: React.FC = () => {
  return (
    <Swiper
      spaceBetween={0}
      pagination={{
        type: 'progressbar',
      }}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>
        <Slide img={slideOne} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={slideTwo} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={slideThree} />
      </SwiperSlide>
    </Swiper>
  );
};
