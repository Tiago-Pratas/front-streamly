import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
/* import { recommenderAsync } from '../../redux/slices/data.slice'; */
import { handleInput } from '../../redux/slices/recommeder.slice';
import { FaHatCowboy } from 'react-icons/fa';
import { GiWesternHat } from 'react-icons/gi';
import { FiStar } from 'react-icons/fi';
import './Recommender3Page.scss';

const Recommender3Page = () => {
    
    const dispatch = useDispatch();

    const setYear = (year) => {
        dispatch(handleInput({ year }));
    };

    return (
        <div className="recommender3-container">
            <div className="recommender3__container-text">
                <h1 className="recommender3__container-title">
                    Perfecto. Ya tengo varias ideas sobre qué recomendarte. Solo
                    dime, más o menos, de qué{' '}
                    <span className="recommender3-bold"> época</span> quieres
                    que sea.
                </h1>
            </div>
            <div className="recommender3__button-icon">
                <div className="recommender3__container-text">
                    <button
                        className="recommender3__button icon"
                        onClick={() => setYear(1980)}
                    >
                        {' '}
                        <GiWesternHat className="recommender3__icon" />
                    </button>
                    <p className="recommender3__container-p">Clásico</p>
                </div>
                <div className="recommender3__container-text">
                    <button
                        className="recommender3__button"
                        onClick={() => setYear(2000)}
                    >
                        <FaHatCowboy className="recommender3__icon" />
                    </button>
                    <p className="recommender3__container-p">Moderno</p>
                </div>
                <div className="recommender3__container-text">
                    <button
                        className="recommender3__button"
                        onClick={() => setYear(2021)}
                    >
                        <FiStar className="recommender3__icon" />
                    </button>
                    <p className="recommender3__container-p">Estreno</p>
                </div>
            </div>
            <div className="recommender3__finish">
                <div className="recommender3__finish-links">
                    <Link
                        to="/recommender2"
                        className="recommender3__finish-link"
                    >
                        Volver
                    </Link>
                </div>
                <div className="recommender1__button">
                    <Link
                        to="/recommender-results"
                        className="btn-blue"
                    >
                        Continuar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Recommender3Page;
