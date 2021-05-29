import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
    const { user } = useSelector((state) => state.user);
    const movies = useSelector((state) => state.tmdb.movies);
    const tvShows = useSelector((state) => state.tmdb.tvShows);
    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    let allMedia = [...tvShows, ...movies];

    const favoritesFiltered = allMedia.filter((favorite) =>
        user.id_medias.includes(favorite.id.toString())
    );
    console.log(favoritesFiltered);
    return (
        <div className="movie__container">
            {favoritesFiltered.map((media) => (
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

export default FavoritesPage;
