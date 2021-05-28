import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const recommenderResults = () => {
    const movies = useSelector((state) => state.tmdb.movies);
    const tvShows = useSelector((state) => state.tmdb.tvShows);
    const { tvOrMovie } = useSelector((state) => state.recommender);
    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    let searchResults;
    console.log('HERE', tvOrMovie);
    if (tvOrMovie == 'tv') {
        searchResults= tvShows;
    } else {
        searchResults = movies;
    }
    console.log('YYY', searchResults);

    return (
        <div className="movie__container">
            {searchResults.map((media) => (
                <Link
                    key={media.id}
                    className="movie__container-link"
                    to={`/details/${
                        (media.name && 'tv') || (media.title && 'movie')
                    }/${media.id}`}
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
    );
};

export default recommenderResults;
