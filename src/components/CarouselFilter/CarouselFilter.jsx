import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import { HiMenuAlt4 } from 'react-icons/hi';
import { getAllProviders } from '../../redux/slices/data.slice';

import 'swiper/swiper.scss';

import './CarouselFilter.scss';

SwiperCore.use([Scrollbar]);

const Carousel = () => {
    const dispatch = useDispatch();
    const [swiperView, setSwiperView] = useState(false);

    const showSwiper = () => setSwiperView(!swiperView);

    const getProviders = dispatch(getAllProviders());
    console.log(getProviders);

    const providers = useSelector(state => state);
    console.log(providers);
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
                        { providers.map((provider) => (
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
