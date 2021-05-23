import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import { HiMenuAlt4 } from 'react-icons/hi';

import 'swiper/swiper.scss';

import './CarouselFilter.scss';

import NetflixLogo from '../../img/Netflix.png';
import HboLogo from '../../img/HBO.png';
import AmazonLogo from '../../img/Amazon-prime-video.png';
import AppleTv from '../../img/apple-tv.png';
import MovistarLogo from '../../img/Movistar-series.png';
import DisneyLogo from '../../img/disney-plus.png';


SwiperCore.use([Scrollbar]);

const Carousel = () => {
    const [swiperView, setSwiperView] = useState(false);

    const showSwiper = () => setSwiperView(!swiperView);

    return (
        <>
            <div className="top-filter" onClick={showSwiper}>
                <div className={swiperView ? 'top-filter__active' : 'top-filter__swiper'}>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={6}
                        scrollbar={{ draggable: true }}
                        autoHeight={true}
                        with={'100px'}
                    >
                        <SwiperSlide><img src={NetflixLogo} alt="Logo de Netflix" className="top-filter__logo"></img></SwiperSlide>
                        <SwiperSlide><img src={HboLogo} alt="Logo de HBO" className="top-filter__logo"></img></SwiperSlide>
                        <SwiperSlide><img src={AmazonLogo} alt="Logo de Amazon prime video" className="top-filter__logo"></img></SwiperSlide>
                        <SwiperSlide><img src={AppleTv} alt="Logo de Apple TV" className="top-filter__logo"></img></SwiperSlide>
                        <SwiperSlide><img src={MovistarLogo} alt="Logo de Movistar Series" className="top-filter__logo"></img></SwiperSlide>
                        <SwiperSlide><img src={DisneyLogo} alt="Logo de diney plus" className="top-filter__logo"></img></SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                        <SwiperSlide>Slide 10</SwiperSlide>
                        <SwiperSlide>Slide 11</SwiperSlide>
                        <SwiperSlide>Slide 12</SwiperSlide>
                    </Swiper>
                </div>

                <div className="top-filter__icon">
                    <HiMenuAlt4 />
                </div>
            </div>
        </>
    );
};

export default Carousel;