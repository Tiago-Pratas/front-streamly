import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import { searchMediaAsync } from '../../redux/slices/data.slice';
import './FindMovie.scss';

const FindMovie = () => {
    const dispatch = useDispatch();
    const searchResults = useSelector(state => state.tmdb.searchResults);
    const imgUrl = 'https://image.tmdb.org/t/p/original/';
    const searchMovie = () => {
        dispatch(searchMediaAsync('Batman'));
    };
    useEffect(() => {
        dispatch(searchMediaAsync('Batman'));
    }, []);

    return (
        <>
            <div className="input-container">
                <form>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="buscar"
                    />
                </form>
                <div>
                    <button
                        className="btn-blue"
                        onClick={() => searchMovie()
                        }
                    >Buscar</button>
                </div>
            </div>
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
        </>
    );
};

export default FindMovie;
