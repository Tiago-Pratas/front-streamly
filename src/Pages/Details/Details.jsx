import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillHeartFill } from 'react-icons/bs';
import { getMovieDetails } from '../../api/tmdb';
import { sendFavoritesAsync, deleteFavoritesAsync } from '../../redux/slices/user.slice';
import './Details.scss';

const Details = (props) => {
    window.scroll({
        top: 0,
    });

    const dispatch = useDispatch();
    const [media, setMedia] = useState('');
    const [video, setVideo] = useState('');
    const [providers, setProviders] = useState([]);
    const { user, isAddingFavorite } = useSelector((state) => state.user);
    const { params } = props.location;

    const tvShows = useSelector((state) => state.tmdb.tvShows);
    const movies = useSelector((state) => state.tmdb.movies);

    const allMedia = [...tvShows, ...movies];

    //use the params that are passed from Carousel.jsx
    const mediaSp = allMedia.find((allMedia) => allMedia.id == params.id) || {};
    const isFavorite = user?.id_medias?.indexOf(params.id) > -1;

    //TODO: set logic in order to update redux and refresh id_medias (don't forget to flag tv || movie)
    const setFavorites = (id) => {
        if (isAddingFavorite) return;
        
        if (!isFavorite) {
            dispatch(sendFavoritesAsync({email: user.email, id }));
        } else {
            dispatch(deleteFavoritesAsync({email: user.email, id }));
        }
    };

    const getClass = () => {
        if (isFavorite) {
            return 'details-container__icon-red';
        } else {
            return 'details-container__icon';
        }
    };

    useEffect(() => {
        //unwrap the values that arrive from the api call and set them on the state
        getMovieDetails(params.format, params.id).then((data) => {
            setMedia(data);
            console.log(data);
            setVideo(data.videos?.results[0]?.key);
            setProviders(data['watch/providers']?.results?.ES?.flatrate);
        });
    }, []);

    //format the date so that it only shows the year the media was released
    const releaseDate = new Date(media.release_date || media.first_air_date);
    const releaseYear = releaseDate.toLocaleDateString(releaseDate, {
        year: 'numeric',
    });

    const imgUrl = 'https://image.tmdb.org/t/p/original/';

    const backgroundImg = {
        backgroundImage: `url(${imgUrl}${media.backdrop_path})`,
        backgroundSize: 'cover',
    };

    console.log(user?.id_medias);
    return (
        <>
            <div className="details-container" style={backgroundImg}>
                <span
                    className={ getClass() }
                    onClick={() => setFavorites(params.id)}
                >
                    <BsFillHeartFill />
                </span>
                <img
                    className="details-container__img"
                    src={`${imgUrl}${media.poster_path}`}
                    alt={mediaSp.title}
                ></img>

                <div className="details-container__info">
                    <h1 className="details-container__info-title">
                        {mediaSp.name || mediaSp.title}({releaseYear})
                    </h1>
                    <div className="details-container__genre"></div>
                    <p className="details-container__info-description">
                        {mediaSp.overview}
                    </p>
                    <h4>Donde ver:</h4>
                    <ul>
                        <li className="details-container__providers">
                            {providers != undefined &&
                                providers.map((provider) => (
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
                                ))}
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
