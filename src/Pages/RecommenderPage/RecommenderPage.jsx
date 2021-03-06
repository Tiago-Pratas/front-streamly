import React from 'react';
import {Link} from 'react-router-dom';
import { MdUpdate } from 'react-icons/md';
import { BsPlay, BsDisplayFill } from 'react-icons/bs';
import { BiMovie } from 'react-icons/bi';
import { FiFastForward } from 'react-icons/fi';
import {IoPlaySkipForwardOutline} from 'react-icons/io5';
import './RecommenderPage.scss';


const RecommenderPage = () => {
    return(
        <div className="recommender-container">
            <div className="recommender__container-text">
                <h1 className="recommender__container-title">¿Qué busco?</h1>
                <p>Si te da igual no pulses nada</p>
            </div>
            <div className="recommender__button-icon">
                <div className="recommender__container-text">
                    <button className="recommender__button icon"> <BsDisplayFill className="recommender__icon"/></button>
                    {/* <Link to="/tvShow"><BsDisplayFill className="recommender__icon"/></Link> */}
                    <p className="recommender__container-p">Serie</p>
                </div>
                <div className="recommender__container-text">
                    <button className="recommender__button"><BiMovie className="recommender__icon"/></button>
                    {/* <Link to="/movie"><BiMovie className="recommender__icon"/></Link> */}
                    <p className="recommender__container-p">Peli</p>
                </div>
            </div>
            <div className="recommender__container-text">
                <p>Dime de cuanto <span className="recommender-bold">tiempo</span> dispones</p>
            </div>
            <div className="recommender__button-icon">
                <div  className="recommender__container-text">
                    <button className="recommender__button"> <IoPlaySkipForwardOutline className="recommender__icon"/></button>
                    {/* <Link to="/play-pause"><IoPlaySkipForwardOutline className="recommender__icon"/></Link> */}
                    <p className="recommender__container-p">No tengo prisa</p>
                </div>
                <div className="recommender__container-text">
                    <button className="recommender__button"> <BsPlay className="recommender__icon"/> </button>
                    {/* <Link to="/play"><BsPlay className="recommender__icon"/></Link> */}
                    <p className="recommender__container-p">Tengo un rato</p>
                </div>
                <div className="recommender__container-text">
                    <button className="recommender__button"> <FiFastForward className="recommender__icon"/> </button>
                    {/*  <Link to="/rewind"><FiFastForward className="recommender__icon"/></Link> */}
                    <p className="recommender__container-p">Algo rápido</p>
                </div>
            </div>
            <div>
                <MdUpdate />
            </div>
            {/* <div>
                <div className="recommender__list">
                    <div>
                        <p>Mis Listas</p>
                    </div>
                    <div>
                        <p>Más opciones</p>
                    </div>
                </div>
            </div> */}
            <div className="recommender__finish">
                <div className="recommender__finish-links">
                    <Link to="/" className="recommender__finish-link">saltar</Link>
                </div>
                <div className="recommender1__button">
                    <Link to="/recommender2" className="btn-blue">Continuar</Link>
                </div>
            </div>
        </div>
    );
};

export default RecommenderPage;
