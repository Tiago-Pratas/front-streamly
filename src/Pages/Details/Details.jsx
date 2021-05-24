import React from 'react';
import './Details.scss';
import Invencible from '../../img/invencible.jpg';
import AmazonLog from '../../img/Amazon-prime-video.png';


const Details = () => {
    return (
        <>
            <div className="details-container">

                <img className="details-container__img" src={Invencible} alt=""></img>

                <div className="details-container__info">
                    <h1 className="details-container__info-title">Invencible (2021)</h1>
                    <h4 className="details-container__info-genre">Animación, Acción, & Aventura, Drama | Duración: 45m</h4>
                    <p className="details-container__info-description">Mark Grayson es un adolescente normal, excepto por el hecho de que su padre es el superhéroe más poderoso del planeta. Poco después de su decimoséptimo cumpleaños, Mark comienza a desarrollar sus propios poderes y entra en la tutela de su padre.</p>
                    <h4>Donde ver:</h4>
                    <ul>
                        <li className="details-container__providers">
                            <a href="https://www.primevideo.com/" target="_blank" rel="noopener noreferrer"><img className="details-container__providers-img" src={AmazonLog}></img></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="trailer">
                <h2 className="trailer__title">Trailer</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/ROCIksHW2oc"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"        
                >
                </iframe>
            </div>
        </>
    );
};

export default Details;