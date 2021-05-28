import React from 'react';
import {Link} from 'react-router-dom';
import { FaHatCowboy } from 'react-icons/fa';
import { GiWesternHat } from 'react-icons/gi';
import { FiStar } from 'react-icons/fi';
import './Recommender3Page.scss';

const Recommender3Page = () => {
    return(
        <div className="recommender3-container">
            <div className="recommender3__container-text">
                <h1 className="recommender3__container-title">Ok. Veo que tienes un rato para ver una buena peli. ¿De qué <span className="recommender3-bold">tipo</span> la quieres?</h1>
            </div>
            <div className="recommender3__button-icon">
                <div className="recommender3__container-text">
                    <button className="recommender3__button icon"> <GiWesternHat className="recommender3__icon"/></button>
                    <p className="recommender3__container-p">Clásico</p>
                </div>
                <div className="recommender3__container-text">
                    <button className="recommender3__button"><FaHatCowboy className="recommender3__icon"/></button>
                    <p className="recommender3__container-p">Moderno</p>
                </div>
                <div className="recommender3__container-text">
                    <button className="recommender3__button"><FiStar className="recommender3__icon"/></button>
                    <p className="recommender3__container-p">Estreno</p>
                </div>
            </div>
            {/* <div>
                    <div>
                        <p>Más opciones</p>
                    </div>
                </div> */}
            <div className="recommender3__finish">
                <div className="recommender3__finish-links">
                    <Link to="/" className="recommender3__finish-link">saltar</Link>
                </div>
                <div className="recommender1__button">
                    <Link to="/recommender4" className="btn-blue">Continuar</Link>
                </div>
            </div>
        </div>
    );
};

export default Recommender3Page;