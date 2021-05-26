import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';
import './Details.scss';
import AmazonLog from '../../img/Amazon-prime-video.png';

const Details = () => {
    const location = useLocation();
    const tvShows = useSelector((state) => state.tmdb.tvShows);
    const movies = useSelector((state) => state.tmdb.movies);
    const genres = useSelector((state) => state.tmdb.genres);

    console.log(genres);

    let allMedia = [...tvShows, ...movies];

    const id = location.id;

    let media = allMedia.find((allMedia) => allMedia.id === id);

    const filtersGenres = media.genre_ids.map((media) =>
        genres.find((genre) => genre.id == media)
    );

    console.log(media, filtersGenres);

    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    const backgroundImg = {
        backgroundImage: `url(${imgUrl}${media.backdrop_path})`,
        backgroundSize: 'cover',
    };

    return (
        <>
            <div className="details-container" style={backgroundImg}>
                <span className='details-icon'><BsFillHeartFill/></span>
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
                        {filtersGenres.map((filtersGenres) => (
                            <h4
                                className="details-container__info-genre"
                                key={filtersGenres.id}
                            >
                                {filtersGenres.name}
                            </h4>
                        ))}
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
                    src="https://www.youtube-nocookie.com/embed/ROCIksHW2oc"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
        </>
    );
};

export default Details;
