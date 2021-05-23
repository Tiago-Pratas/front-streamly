import React from 'react';
import './RecommenderPage.scss';
import { MdUpdate } from 'react-icons/md';
import { BsPlay } from 'react-icons/bs';
import { BiMovie } from 'react-icons/bi';
import { FiRewind } from 'react-icons/fi';


const RecommenderPage = () => {
    return(
        <div className="recommender-container">
            <div className="recommender-container__text">
                <h1>¿Qué busco?</h1>
                <p>Si te da igual no pulses nada</p>
            </div>
            <div className="recommender__button-icon">
                <div>
                    <button className="recommender__button icon"></button>
                    <p>Serie</p>
                </div>
                <div>
                    <button className="recommender__button"><BiMovie className=""/></button>
                    <p>Peli</p>
                </div>
            </div>
            <div>
                <p>Dime de cuanto tiempo dispones</p>
            </div>
            <div>
                <button className="recommender__button"><FiRewind /></button>
                <p>No tengo prisa</p>
                <button className="recommender__button"> <BsPlay /> </button>
                <p>Tengo un rato</p>
                <button className="recommender__button"></button>
                <p>Algo rápido</p>
            </div>
            <div><MdUpdate /></div>
            <div>
                <div>
                    <p>Mis Listas</p>
                </div>
                <div>
                    <p>Más opciones</p>
                </div>
            </div>
            <div>
                <p>Saltar</p>
                <button>Continuar</button>
            </div>
        </div>
    );
};

export default RecommenderPage;