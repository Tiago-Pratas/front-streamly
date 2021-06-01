import React from 'react';
import { Link } from 'react-router-dom';
import { MdEventSeat } from 'react-icons/md';
import './WelcomePage2.scss';

const WelcomePage2 = () => <div className="welcome2-container background-blue">
    <div className="welcome-container__text">
        <h1 className="welcome2-container__title"> Personaliza tu propio feed de noticias para estar al tanto de todo.</h1>
        <p>Además, pregúntale a nuestro <span className="welcome2-container__title-recommender">recomendador</span> para que facilite tus búsquedas</p>
    </div>
    <div>
        <MdEventSeat className="logo" />
    </div>
    <div className="welcome2-container__button">
        <Link to="/filter-providers" className="btn-white welcome-container__button">Finalizar</Link>
    </div>
</div>;

export default WelcomePage2;