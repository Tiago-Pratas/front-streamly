import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import { HiMenuAlt4 } from 'react-icons/hi';
import { filterProviders } from '../../redux/slices/data.slice';

import 'swiper/swiper.scss';

import './CarouselFilter.scss';

SwiperCore.use([Scrollbar]);

const Carousel = () => {
    const [swiperView, setSwiperView] = useState(false);

    const showSwiper = () => setSwiperView(!swiperView);

    const dispatch = useDispatch();

    const handleFilter = (ev) => {
        dispatch(filterProviders(ev));
    };

    const providers = useSelector((state) => state.tmdb.providers);
    let userProvider = useSelector((state) => state.user);

    if (userProvider) {
        console.log('Loading...');
    } else {
        userProvider = userProvider.user.id_providers;
    }


    providers.map(providers => providers.provider_id == 35);
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
                        spaceBetween={10}
                        slidesPerView={'auto'}
                        scrollbar={{ draggable: true }}
                        width={25}
                    >
                        {providers.map((provider) => (
                            <SwiperSlide
                                onClick={() =>
                                    handleFilter(provider.provider_id)
                                }
                                key={provider.provider_id}
                            >
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
