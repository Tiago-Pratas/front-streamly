import React, { useState, useEffect } from 'react';
import './Details.scss';
import { useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/tmdb';

const Details = () => {
    const [media, setMedia] = useState('');
    const [video, setVideo] = useState('');
    const [providers, setProviders] = useState([]);

    const location = useLocation();

    useEffect(() => {
        getMovieDetails(location.id)
            .then(data => { 
                setMedia(data); console.log(data); 
                setVideo(data.videos.results[0].key); 
                setProviders(data['watch/providers'].results.US.flatrate);
            });
    }, []);

    //format date so that it only shows the year the media was released
    const releaseDate = new Date(media.release_date);
    const releaseYear = releaseDate.toLocaleDateString(releaseDate, { year: 'numeric'});

    console.log(providers);
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
                        {media.name || media.title}({releaseYear})
                    </h1>
                    <div className="details-container__genre">
                        
                    </div>
                    <p className="details-container__info-description">
                        {media.overview}
                    </p>
                    <h4>Donde ver:</h4>
                    <ul>
                        <li className="details-container__providers">
                            {
                                providers != undefined && providers.map(provider => (
                                    <a
                                        href="https://www.primevideo.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={provider.id}
                                    >
                                        <img
                                            className="details-container__providers-img"
                                            src={`${imgUrl}${provider.logo_path}`}
                                        ></img>
                                    </a>
                                    
                                ))
                            }

                        </li>
                    </ul>
                </div>
            </div>

            <div className="trailer">
                <h2 className="trailer__title">Trailer</h2>
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube-nocookie.com/embed/${video}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
        </>
    );
};

export default Details;
