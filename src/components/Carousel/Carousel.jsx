import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom';
import SwiperCore, { Scrollbar } from 'swiper';
import fclub from '../../img/fclub.jpeg';
import 'swiper/swiper.scss';
import './Carousel.scss';

SwiperCore.use([Scrollbar]);

const Carousel = () => {
    const image = fclub;
    return (
        <>
            <div className='swiper-text'>
                <h3 className='swiper-text__color'>Novedades</h3>
                <Link className='swiper-text__link'> Ver todo</Link>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                scrollbar={{ draggable: true }}
                className='swiper-conatiner__height'
            >
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="fclub" className="swiper-image" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
