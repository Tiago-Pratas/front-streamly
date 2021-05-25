import React from 'react';
import './Details.scss';
import AmazonLog from '../../img/Amazon-prime-video.png';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const tvShows = useSelector((state) => state.tmdb.tvShows);
    const movies = useSelector((state) => state.tmdb.movies);


    let allMedia = [...tvShows, ...movies];

    const id = location.id;

    const media = allMedia.find((allMedia) => allMedia.id === id);
    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <>
            <div className="details-container">
                <img
                    className="details-container__img"
                    src={`${imgUrl}${media.poster_path}`}
                    alt={media.title}
                ></img>

                <div className="details-container__info">
                    <h1 className="details-container__info-title">{media.title}(2021)</h1>
                    <h4 className="details-container__info-genre">
                        Animación, Acción, & Aventura, Drama | Duración: 45m
                    </h4>
                    <p className="details-container__info-description">
                        {media.overview}
                    </p>
                    <h4>Donde ver:</h4>
                    <ul>
                        <li className="details-container__providers">
                            <a
                                href="https://www.primevideo.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="details-container__providers-img"
                                    src={AmazonLog}
                                ></img>
                            </a>
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
                ></iframe>
            </div>
        </>
    );
};

export default Details;
