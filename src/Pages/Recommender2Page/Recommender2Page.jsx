import React from 'react';
import {Link} from 'react-router-dom';
import { FaRegLaughSquint } from 'react-icons/fa';
import { RiEmotionSadLine, RiEmotionLine } from 'react-icons/ri';
import { ImEvil } from 'react-icons/im';
import { ImBaffled, ImSmile } from 'react-icons/im';
import './Recommender2Page.scss';

const Recommender2Page = () => {
    return(
        <div className="recommender2-container">
            <div className="recommender2__container-text">
                <h1 className="recommender2__container-title">Ok. Veo que tienes un rato para ver una buena peli. ¿De qué <span className="recommender2-bold">tipo</span> la quieres?</h1>
            </div>
            <div className="recommender2__button-icon">
                <div className="recommender2__container-text">
                    <button className="recommender2__button icon"> <FaRegLaughSquint className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Unas risas</p>
                </div>
                <div className="recommender2__container-text">
                    <button className="recommender2__button"><RiEmotionSadLine className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Emotiva</p>
                </div>
                <div className="recommender2__container-text">
                    <button className="recommender2__button"><RiEmotionLine className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Íntima</p>
                </div>
            </div>
            <div className="recommender2__button-icon">
                <div className="recommender2__container-text">
                    <button className="recommender2__button"><ImSmile className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Reivindicativa</p>
                </div>
                <div className="recommender2__container-text">
                    <button className="recommender2__button"><ImBaffled className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Inquietante</p>
                </div>
                <div className="recommender2__container-text">
                    <button className="recommender2__button"><ImEvil className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Terrofífica</p>
                </div>
            </div>
            
            {/* <div>
                <div className="recommender__list">
                    <div>
                        <p>Más opciones</p>
                    </div>
                </div>
            </div> */}
            <div className="recommender2__finish">
                <div className="recommender2__finish-links">
                    <Link to="/" className="recommender2__finish-link">saltar</Link>
                </div>
                <div className="recommender1__button">
                    <Link to="/recommender3" className="btn-blue">Continuar</Link>
                </div>
            </div>
        </div>
    );
};

export default Recommender2Page;