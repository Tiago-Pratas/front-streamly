import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleInput } from '../../redux/slices/recommeder.slice';
import { FaRegLaughSquint } from 'react-icons/fa';
import { RiEmotionSadLine, RiEmotionLine } from 'react-icons/ri';
import { ImEvil } from 'react-icons/im';
import { ImBaffled, ImSmile } from 'react-icons/im';
import './Recommender2Page.scss';

const Recommender2Page = () => {

    const dispatch = useDispatch();
    const mediaType = useSelector(state => state.recommender.tvOrMovie);
    const time = useSelector(state => state.recommender.runtime);

    const setGenre = (genre) => {
        dispatch(handleInput({ genre }));
    };


    return(
        <div className="recommender2-container">
            <div className="recommender2__container-text">
                <h1 className="recommender2__container-title">Ok. Veo que {time == 130? 'tienes tiempo para ver' : time ==  120? 'tienes un rato para ver' : 'tienes poco timepo para'} {mediaType== 'tv'?  'una buena serie' : 'una buena peli'} . ¿De qué <span className="recommender2-bold">tipo</span> la quieres?</h1>
            </div>
            <div className="recommender2__button-icon">
                <div className="recommender2__container-text">
                    <button className="recommender2__button  icon" onClick={() => setGenre(35)}> <FaRegLaughSquint className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Unas risas</p>
                </div>
                <div className="recommender2__container-text">
                    <button className="recommender2__button" onClick={() => setGenre(18)}><RiEmotionSadLine className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Emotiva</p>
                </div>
                <div className="recommender2__container-text">
                    <button className="recommender2__button" onClick={() => setGenre(10749)}><RiEmotionLine className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Íntima</p>
                </div>
            </div>
            <div className="recommender2__button-icon">
                <div className="recommender2__container-text">
                    <button className="recommender2__button" onClick={() => setGenre(10751)}><ImSmile className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Familiar</p>
                </div>
                <div className="recommender2__container-text">
                    <button className="recommender2__button" onClick={() => setGenre(9648)}><ImBaffled className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Inquietante</p>
                </div>
                <div className="recommender2__container-text">
                    <button className="recommender2__button" onClick={() => setGenre(27)}><ImEvil className="recommender2__icon"/></button>
                    <p className="recommender2__container-p">Terrofífica</p>
                </div>
            </div>
            <div className="recommender2__finish">
                <div className="recommender2__finish-links">
                    <Link to="/recommender1" className="recommender2__finish-link">Volver</Link>
                </div>
                <div className="recommender1__button">
                    <Link to="/recommender3" className="btn-blue">Continuar</Link>
                </div>
            </div>
        </div>
    );
};

export default Recommender2Page;