import React, { useState, useEffect } from 'react';
import './Details.scss';
import AmazonLog from '../../img/Amazon-prime-video.png';
import { useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/tmdb';

const Details = () => {
    const [media, setMedia] = useState({});

    const location = useLocation();

    useEffect(() => {
        getMovieDetails(location.id).then(data => { setMedia(data); });
    }, []);
    
        
    console.log('media', media.videos);

    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    const backgroundImg = { backgroundImage: `url(${imgUrl}${media.backdrop_path})`, backgroundSize: 'cover'};

    return (
        <>
            <div className="details-container" style={backgroundImg }>
                <img
                    className="details-container__img"
                    src={`${imgUrl}${media.poster_path}`}
                    alt={media.title}
                ></img>

                <div className="details-container__info">
                    <h1 className="details-container__info-title">
                        {media.name || media.title}(2021)
                    </h1>
                    <div className="details-container__genre">
                        
                    </div>
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
                    src={'https://www.youtube-nocookie.com/embed/${media.videos.results[0].key}'}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
        </>
    );
};

export default Details;
