import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import SwiperCore, { Scrollbar } from 'swiper';
//import fclub from '../../img/fclub.jpeg';
import 'swiper/swiper.scss';
import './Carousel.scss';
import PropTypes from 'prop-types';

SwiperCore.use([Scrollbar]);

const Carousel = (props) => {
    //const image = fclub;
    console.log(props);
    
    Carousel.propTypes = {
        title: PropTypes.node,
        date: PropTypes.node,
        genre: PropTypes.node,
    };
    const tvShows = useSelector((state) => state.tmdb.tvShows);
    const movies = useSelector((state) => state.tmdb.movies);

    let allMedia = [...tvShows, ...movies];

    if(props.date) allMedia = allMedia.filter(allMedia => allMedia.release_date < props.date);
    /* if(props.genre) allMedia = allMedia.filter((genre) => genre.genres_id.map(genre => props.genre) >=0); */
    console.log('movies', allMedia);
    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <>
            <div className="swiper-text">
                <h3 className="swiper-text__color">{props.title}</h3>
                <Link className="swiper-text__link"> Ver todo</Link>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                scrollbar={{ draggable: true }}
                className="swiper-conatiner__height"
            >
                {allMedia.map((tvShow) => (
                    <SwiperSlide key={tvShow.id}>
                        <img
                            src={`${imgUrl}${tvShow.poster_path}`}
                            alt="fclub"
                            className="swiper-image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
