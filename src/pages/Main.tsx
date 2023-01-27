import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Containter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper';
import { Slide } from '../components/Slide';
import slideOne from '../assets/images/slideOne.jpg';
import slideTwo from '../assets/images/slideTwo.jpg';
import slideThree from '../assets/images/slideThree.jpg';
import { Header } from '../components/Header';
import { LittleInfo } from '../components/LittleInfo';

const MainEl = styled.div``;

export const Main: React.FC = () => {
  return (
    <MainEl>
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
      <LittleInfo />
    </MainEl>
  );
};
