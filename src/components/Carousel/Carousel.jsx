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
    Carousel.propTypes = {
        title: PropTypes.node,
        date: PropTypes.node,
        genre: PropTypes.node,
    };
    const tvShows = useSelector((state) => state.tmdb.tvShows);
    const movies = useSelector((state) => state.tmdb.movies);

    let allMedia = [...tvShows, ...movies];

    if (props.date)
        allMedia = allMedia.filter(
            (allMedia) => allMedia.release_date < props.date
        );

    if (props.genre) {
        const filter = parseInt(props.genre);
        const filteredResult = allMedia.filter((item) => {
            return item.genre_ids.indexOf(filter) >= 0;
        });
        allMedia = filteredResult;
    }
    const imgUrl = 'https://image.tmdb.org/t/p/original/';


    return (
        <>
            <div className="swiper-text">
                <h3 className="swiper-text__color">{props.title}</h3>
                <Link className="swiper-text__link"> Ver todo</Link>
            </div>

            <Swiper
                breakpoints={{
                    480: {
                        width: 480,
                        slidesPerView: 2,
                    },
 
                }}
                slidesPerView={2}
                spaceBetween={10}
                scrollbar={{ draggable: true }}
                className="swiper-conatiner__height"
            >
                {allMedia.slice(0, 19).map((media) => (
                    <SwiperSlide key={media.id}>
                        <Link
                            to={{
                                pathname: '/details',
                                id: media.id,
                            }}
                        >
                            <img
                                src={`${imgUrl}${media.poster_path}`}
                                alt={media.title}
                                className="swiper-image"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
