import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { searchMediaAsync } from '../../redux/slices/data.slice';
import './FindMovie.scss';

const INITIAL_STATE = {};

const FindMovie = () => {
    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state.tmdb.searchResults);
    const [searchValue, setSearchValue] = useState(INITIAL_STATE);
    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    const handleFormSubmit = async (searchValue) => {
        await dispatch(searchMediaAsync(searchValue));
        setSearchValue(INITIAL_STATE);
    };

    const handleInputChange = (ev) => {
        const { value } = ev.target;
        setSearchValue(value);
    };

    return (
        <>
            <div className="input-container">
                <input
                    type="search"
                    placeholder="buscar"
                    onChange={handleInputChange}
                />
                <div>
                    <button
                        type="submit"
                        onClick={() => handleFormSubmit(searchValue)}
                        className="btn-blue"
                    >
                        Buscar
                    </button>
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
