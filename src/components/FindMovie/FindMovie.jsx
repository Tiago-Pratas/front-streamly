import React from 'react';
import { useDispatch } from 'react-redux';
import { findRandomMedia } from '../../api/tmdb';
import './FindMovie.scss';


const FindMovie = () => {

    const dispatch = useDispatch();
    dispatch(findRandomMedia('batman'));

    findRandomMedia('batman');

    return(
        <div className="input-container">
            <input type="text" name="search" id="search" placeholder="buscar"/>
        </div>
    );
};

export default FindMovie;
