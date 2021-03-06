import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import popcorn from '../../img/undraw_home_cinema_l7yl.svg';
import './Recommender1Page.scss';

const Recommender1Page = () => {
    const { user } = useSelector((state) => state);
    console.log(user);
    return (
        <div className="recommender1-container">
            <div className="recommender1__container-text">
                <h1 className="recommender1__container-title">
                    ¡Hola{' '}
                    <span className="recommender1-bold">
                        {user.hasUser ? <span>{user.user.username}</span> : 'User'}
                    </span>
                    ! ¿Qué tal? Supongo que quieres que te ayude a encontrar
                    algo interesante que ver.
                </h1>
                <p>
                    Va a ser rápido, solo necesito saber{' '}
                    <span className="recommender1-bold">tres cosas</span>
                </p>
            </div>
            <div>
                <img
                    className="recommender1__container-img"
                    src={popcorn}
                    alt="image popcorn"
                ></img>
            </div>
            <div className="recommender1__button">
                <Link to="/recommender" className="btn-blue">
                    Continuar
                </Link>
            </div>
        </div>
    );
};

export default Recommender1Page;
