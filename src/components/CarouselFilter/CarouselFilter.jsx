import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import { HiMenuAlt4 } from 'react-icons/hi';
import { filterProviders } from '../../redux/slices/data.slice';
import { Link } from 'react-router-dom';
import add from '../../img/add--v1.png';

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
    const user = useSelector((state) => state.user.user);
    if (!user) return null;

    const providersFiltered = providers.filter((provider) =>
        user.id_providers.includes(provider.provider_id.toString())
    );
    console.log(providersFiltered);

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
                        {providersFiltered.map((provider) => (
                            <SwiperSlide
                                onClick={() =>
                                    handleFilter(provider.provider_id)
                                }
                                key={provider.provider_id}
                            >
                                <img
                                    src={`${imgUrl}${provider.logo_path}`}
                                    alt={provider.provider_name}
                                    className="top-filter__logo"
                                ></img>
                            </SwiperSlide>
                        ))}
                        <SwiperSlide>
                            <Link to="/filter-providers">
                                <img
                                    src={add}
                                    alt="add"
                                    className="top-filter__logo"
                                ></img>
                            </Link>
                        </SwiperSlide>
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
