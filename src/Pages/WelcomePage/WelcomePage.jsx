import React from 'react';
import { Link } from 'react-router-dom';

import NetflixLogo from '../../img/Netflix.png';
import HboLogo from '../../img/HBO.png';
import AmazonLogo from '../../img/Amazon-prime-video.png';
import AppleTv from '../../img/apple-tv.png';
import MovistarLogo from '../../img/Movistar-series.png';
import DisneyLogo from '../../img/disney-plus.png';
import './WelcomePage.scss';

const WelcomePage = () => {
    return (
        <div className="welcome-container background-blue">

            <div className="welcome-container__text">
                <h1 className="welcome-container__title">¡Bienvenido/a a <span className="welcome-container__title-streamly">Streamly</span>!</h1>
                <p>Cuando te registres unificicarás todas las cuentas de tus suscripciones a plataformas de streaming</p>
            </div>

            <div className="welcome-container__img">
                <img src={NetflixLogo} alt="Logo de Netflix" className="welcome-container__logo"></img>
                <img src={HboLogo} alt="Logo de HBO" className="welcome-container__logo"></img>
                <img src={AmazonLogo} alt="Logo de Amazon prime video" className="welcome-container__logo"></img>
                <img src={AppleTv} alt="Logo de Apple TV" className="welcome-container__logo"></img>
                <img src={MovistarLogo} alt="Logo de Movistar Series" className="welcome-container__logo"></img>
                <img src={DisneyLogo} alt="Logo de diney plus" className="welcome-container__logo"></img>
            </div>


            <Link to="/bienvenido-recomendador" className="btn-white welcome-container__button">Siguiente</Link>


        </div>
    );
};

export default WelcomePage;