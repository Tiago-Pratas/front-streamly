import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleInput } from '../../redux/slices/recommeder.slice';
import { MdUpdate } from 'react-icons/md';
import { BsPlay, BsDisplayFill } from 'react-icons/bs';
import { BiMovie } from 'react-icons/bi';
import { FiFastForward } from 'react-icons/fi';
import { IoPlaySkipForwardOutline } from 'react-icons/io5';
import './Recommender1Page.scss';

const RecommenderPage = () => {

    const dispatch = useDispatch();

    const setTvOrMovie = (tvOrMovie) => {
        dispatch(handleInput({ tvOrMovie }));
    };

    const setRuntime = (runtime) => {
        dispatch(handleInput({ runtime }));
    };

    return (
        <div className="recommender-container">
            <div className="recommender__container-text">
                <h1 className="recommender__container-title">¿Qué busco?</h1>
            </div>
            <div className="recommender__button-icon">
                <div className="recommender__container-text">
                    <button
                        className="recommender__button icon"
                        onClick={() => setTvOrMovie('tv')}
                    >
                        {' '}
                        <BsDisplayFill className="recommender__icon" />
                    </button>

                    <p className="recommender__container-p">Serie</p>
                </div>
                <div className="recommender__container-text">
                    <button
                        className="recommender__button"
                        onClick={() => setTvOrMovie('movie')}
                    >
                        <BiMovie className="recommender__icon" />
                    </button>

                    <p className="recommender__container-p">Peli</p>
                </div>
            </div>
            <div className="recommender__container-text">
                <p>
                    Dime de cuanto{' '}
                    <span className="recommender-bold">tiempo</span> dispones
                </p>
            </div>
            <div className="recommender__button-icon">
                <div className="recommender__container-text">
                    <button
                        className="recommender__button"
                        onClick={() => setRuntime(120)}
                    >
                        {' '}
                        <IoPlaySkipForwardOutline className="recommender__icon" />
                    </button>
                    <p className="recommender__container-p">No tengo prisa</p>
                </div>
                <div className="recommender__container-text">
                    <button
                        className="recommender__button"
                        onClick={() => setRuntime(80)}
                    >
                        {' '}
                        <BsPlay className="recommender__icon" />{' '}
                    </button>
                    <p className="recommender__container-p">Tengo un rato</p>
                </div>
                <div className="recommender__container-text">
                    <button
                        className="recommender__button"
                        onClick={() => setRuntime(40)}
                    >
                        {' '}
                        <FiFastForward className="recommender__icon" />{' '}
                    </button>
                    <p className="recommender__container-p">Algo rápido</p>
                </div>
            </div>
            <div>
                <MdUpdate />
            </div>
            <div className="recommender__finish">
                <div className="recommender1__button">
                    <Link to="/recommender2" className="btn-blue">
                        Continuar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecommenderPage;
