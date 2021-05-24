import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Scrollbar]);

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={5}
                slidesPerView={4}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <SwiperSlide>Slide 10</SwiperSlide>
                <SwiperSlide>Slide 11</SwiperSlide>
                <SwiperSlide>Slide 12</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
