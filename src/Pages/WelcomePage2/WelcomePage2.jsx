import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage2.scss';
/* import ArmChairs from '../../img/armchairs.png'; */
import { MdEventSeat } from 'react-icons/md';

const WelcomePage2 = () => {
    return (
        <div className="welcome2-container background-blue">
            <div className="welcome-container__text">
                <h1 className="welcome2-container__title"> Personaliza tu propio feed de noticias para estar al tanto de todo.</h1>
                <p>Además, pregúntale a nuestro <span className="welcome2-container__title-recommender">recomendador</span> para que facilite tus búsquedas</p>
            </div>
            <div>
                <MdEventSeat className="logo" />
            </div>
            <div className="welcome2-container__button">
                <Link to="/" className="btn-white welcome-container__button">Finalizar</Link>
            </div>
        </div>
    );
};

export default WelcomePage2;