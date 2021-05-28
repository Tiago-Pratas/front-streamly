import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
/* import { recommenderAsync } from '../../redux/slices/data.slice'; */
import { handleInput } from '../../redux/slices/recommeder.slice';
import { FaHatCowboy } from 'react-icons/fa';
import { GiWesternHat } from 'react-icons/gi';
import { FiStar } from 'react-icons/fi';
import './Recommender3Page.scss';

const Recommender3Page = () => {
    const { tvOrMovie, runtime, genre, year } = useSelector(
        (state) => state.recommender
    );
    const providers = useSelector((state) => state.user.user.id_providers);
    console.log(tvOrMovie, runtime, genre, year, providers);
    const dispatch = useDispatch();

    /*  const getRecommendations = () => {
        dispatch(recommenderAsync(tvOrMovie, runtime, genre, year, providers));
    }; */

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
                        onClick={() => setYear(1981)}
                    >
                        <FaHatCowboy className="recommender3__icon" />
                    </button>
                    <p className="recommender3__container-p">Moderno</p>
                </div>
                <div className="recommender3__container-text">
                    <button
                        className="recommender3__button"
                        onClick={() => setYear(2000)}
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
<<<<<<< HEAD
                    <Link to="/building" className="btn-blue">Continuar</Link>
=======
                    <Link
                        to="/building"
                        className="btn-blue"
                        //onClick={getRecommendations}
                    >
                        Continuar
                    </Link>
>>>>>>> 08dfd2f3ea9332dc2ea579eae5d0a229ea05f1c5
                </div>
            </div>
        </div>
    );
};

export default Recommender3Page;
