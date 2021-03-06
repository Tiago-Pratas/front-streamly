import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AllMovies.scss';
import PropTypes from 'prop-types';
import { BiArrowBack } from 'react-icons/bi';

const AllMovies = (props) => {
    AllMovies.propTypes = {
        changeView: PropTypes.node,
        value: PropTypes.node,
    };

    
    let genreId = parseInt(props.value[1]);

    const movies = useSelector(state => state.tmdb.movies);
    const tvShows = useSelector(state => state.tmdb.tvShows);

    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    const allMoviesTvShows = [...movies, ...tvShows];

    let filterMedia;

    if(genreId) {
        filterMedia = allMoviesTvShows.filter(genre => genre.genre_ids.includes(genreId));
    } else {
        filterMedia = allMoviesTvShows;
    }


    return (
        <div className="movie">
            <div className="movie__header-container">
                <h1 className="movie__header-container-title">{props.value[0]}</h1>
                <BiArrowBack className="movie__header-container-icon" onClick={props.changeView} />
            </div>
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