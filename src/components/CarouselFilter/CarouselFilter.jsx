import React, { useState } from 'react';

<<<<<<< HEAD
import { useDispatch } from 'react-redux';
=======
import {useSelector } from 'react-redux';
>>>>>>> 2cd0052cd19c3879965aebd1c07d3b9810c06578
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import { HiMenuAlt4 } from 'react-icons/hi';

import 'swiper/swiper.scss';

import './CarouselFilter.scss';

SwiperCore.use([Scrollbar]);

const Carousel = () => {
    
    const [swiperView, setSwiperView] = useState(false);

    const showSwiper = () => setSwiperView(!swiperView);


<<<<<<< HEAD
    //const providers = useSelector(state => state);
    //console.log(providers);
=======
    const providers = useSelector(state => state.tmdb.providers);
    console.log(providers);
>>>>>>> 2cd0052cd19c3879965aebd1c07d3b9810c06578
    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <>
            <div className="top-filter">
                <div
                    className={
                        swiperView ? 'top-filter__active' : 'top-filter__swiper'
                    }
                >
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={6}
                        scrollbar={{ draggable: true }}
                        autoHeight={true}
                        with={'100px'}
                    >
                        { providers.results.map((provider) => (
                            <SwiperSlide key={provider.provider_id}>
                                <img
                                    src={`${imgUrl}${provider.logo_path}`}
                                    alt="Logo de Netflix"
                                    className="top-filter__logo"
                                ></img>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="top-filter__icon" onClick={showSwiper}>
                    <HiMenuAlt4 />
                </div>
            </div>
        </>
    );
};

export default Carousel;
