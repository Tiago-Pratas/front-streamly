import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import PropTypes from 'prop-types';
import 'swiper/swiper.scss';
import './Carousel.scss';

SwiperCore.use([Scrollbar]);

const Carousel = (props) => {
    Carousel.propTypes = {
        title: PropTypes.node,
        date: PropTypes.node,
        genre: PropTypes.node,
        changeView: PropTypes.node,
        onchange: PropTypes.node,
    };
    const tvShows = useSelector((state) => state.tmdb.tvShows);
    const movies = useSelector((state) => state.tmdb.movies);

    const carouselTitle = props.title;
    const carouselGenre = props.genre;

    const hadleAllMoviesView = () => {
        props.changeView();
        props.onchange([carouselTitle, carouselGenre]);
    };

    let allMedia = [...tvShows, ...movies];

    if (props.date) {
        allMedia = allMedia.filter((allMedia) => allMedia.release_date < props.date);
    };

    if (props.genre) {
        const filter = parseInt(props.genre);
        const filteredResult = allMedia.filter((item) => {
            return item.genre_ids.indexOf(filter) >= 0;
        });
        allMedia = filteredResult;
    }

    if(props.title !== 'Populares'){
        const shuffle = (array) => {
            let currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        };
    
        allMedia = shuffle(allMedia);
    }

    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <>
            <div className="swiper-text">
                <h3 className="swiper-text__color">{props.title}</h3>
                <Link
                    className="swiper-text__link"
                    onClick={hadleAllMoviesView}
                >
                    Ver todo
                </Link>
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
                {allMedia.slice(0, 20).map((media) => (
                    <SwiperSlide key={media.id}>
                        <Link
                            to={`/details/${
                                (media.name && 'tv') || (media.title && 'movie')
                            }/${media.id}`}
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
