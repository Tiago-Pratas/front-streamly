import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AllMovies.scss';
import PropTypes from 'prop-types';

const AllMovies = (props) => {
    AllMovies.propTypes = {
        changeView: PropTypes.node,
        setupSwiper: PropTypes.node,
    };


    const movies = useSelector(state => state.tmdb.movies);
    const tvShows = useSelector(state => state.tmdb.tvShows);

    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    const allMoviesTvShows = [...movies, ...tvShows];

    const filterMedia = allMoviesTvShows.filter(genre => genre.genre_ids.includes());

    return (
        <div className="movie">
            <h1>All movies</h1>
            <h6 onClick={props.changeView}>Volver</h6>
            <div className="movie__container">
                {filterMedia.map((media) => (
                    <Link
                        key={media.id}
                        className="movie__container-link"
                        to={{
                            pathname: '/details',
                            id: media.id,
                        }}
                    >
                        <img
                            loading="lazy"
                            src={`${imgUrl}${media.poster_path}`}
                            alt={media.title}
                            key={media.id}
                            className="movie__container-img"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllMovies;