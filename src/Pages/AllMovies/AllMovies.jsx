import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AllMovies.scss';

const AllMovies = () => {
    const movies = useSelector(state => state.tmdb.movies);
    const tvShows = useSelector(state => state.tmdb.tvShows);

    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    const allMoviesTvShows = [...movies, ...tvShows];


    return (
        <div className="movie">
            <h1>All movies</h1>
            <div className="movie__container">
                {allMoviesTvShows.map((media) => (
                    <Link
                        key={media.id}
                        className="movie__container-link"
                        to={{
                            pathname: '/details',
                            id: media.id,
                        }}
                    >
                        <img
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