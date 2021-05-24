import React from 'react';
import './RecommenderPage.scss';
import { MdUpdate } from 'react-icons/md';
import { BsPlay, BsDisplayFill } from 'react-icons/bs';
import { BiMovie } from 'react-icons/bi';
import { FiFastForward } from 'react-icons/fi';
import {IoPlaySkipForwardOutline} from 'react-icons/io5';


const RecommenderPage = () => {
    return(
        <div className="recommender-container">
            <div className="recommender-container__text">
                <h1 className="recommender-container__title">¿Qué busco?</h1>
                <p>Si te da igual no pulses nada</p>
            </div>
            <div className="recommender__button-icon">
                <div className="recommender-container__text">
                    <button className="recommender__button icon"> <BsDisplayFill className="recommender__icon"/></button>
                    <p className="recommender-container__p">Serie</p>
                </div>
                <div className="recommender-container__text">
                    <button className="recommender__button"><BiMovie className="recommender__icon"/></button>
                    <p className="recommender-container__p">Peli</p>
                </div>
            </div>
            <div className="recommender-container__text">
                <p>Dime de cuanto <span className="recommender-bold">tiempo</span> dispones</p>
            </div>
            <div className="recommender__button-icon">
                <div  className="recommender-container__text">
                    <button className="recommender__button"> <IoPlaySkipForwardOutline className="recommender__icon"/></button>
                    <p className="recommender-container__p">No tengo prisa</p>
                </div>
                <div className="recommender-container__text">
                    <button className="recommender__button"> <BsPlay className="recommender__icon"/> </button>
                    <p className="recommender-container__p">Tengo un rato</p>
                </div>
                <div className="recommender-container__text">
                    <button className="recommender__button"> <FiFastForward className="recommender__icon"/> </button>
                    <p className="recommender-container__p">Algo rápido</p>
                </div>
            </div>
            <div>
                <MdUpdate />
            </div>
            <div>
                <div className="recommender__list">
                    <div>
                        <p>Mis Listas</p>
                    </div>
                    <div>
                        <p>Más opciones</p>
                    </div>
                </div>
            </div>
            <div className="recommender__finish">
                <div className="recommender__finish-p">
                    <p>Saltar</p>
                </div>
                <div>
                    <button className="btn-blue welcome-container__button">Continuar</button>
                </div>
            </div>
        </div>
    );
};

export default RecommenderPage;
