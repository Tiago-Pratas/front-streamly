import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';

const getProviders = async () => {
    //get all the services for Spain
    try {
        const response = await axios.get(`${baseUrl}watch/providers/movie`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                watch_region: 'ES',
                language: 'es-ES',
            },
        });

        return response.data.results;
    } catch (err) {
        return err;
    }
};

const getTvShows = async (provider) => {
    let response = [];

    let page = 0;

    while (page < 10) {
        page += 1;
        const result = await axios.get(`${baseUrl}discover/tv`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                with_watch_providers: `${provider}`,
                page: page,
                language: 'es-ES',
                watch_region: 'ES',
                sort_by: 'popularity.desc',
            },
        });

        response = [...response, ...result.data.results];
    }

    return response.flat();
};

const getMovies = async (provider) => {
    let response = [];

    let page = 0;

    while (page < 10) {
        page += 1;
        const result = await axios.get(`${baseUrl}discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                with_watch_providers: `${provider}`,
                page: page,
                language: 'es-ES',
                watch_region: 'ES',
                sort_by: 'popularity.desc',
            },
        });

        response = [...response, ...result.data.results];
    }

    return response.flat();
};

const getGenres = async () => {
    const response = await axios.get(`${baseUrl}genre/movie/list`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'es-ES',
        },
    });
    const responseTv = await axios.get(`${baseUrl}genre/tv/list`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'es-ES',
        },
    });
    return [...response.data.genres, ...responseTv.data.genres];
};

const getMovieDetails = async (format, id) => {
    try {
        if (format == 'movie') {
            const response = await axios.get(`${baseUrl}movie/${id}`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: 'en-US',
                    append_to_response: 'videos,watch/providers,languages',
                },
            });

            return response.data;
        } else {
            const responseTv = await axios.get(`${baseUrl}tv/${id}`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: 'en-US',
                    append_to_response: 'videos,watch/providers',
                },
            });

            return responseTv.data;
        }
    } catch (err) {
        return err;
    }
};

const findRandomMedia = async (search) => {
    const response = await axios.get(`${baseUrl}search/movie`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            query: search,
        },
    });
    console.log(response);
    return response.data;
};

const getRecommendation = async (format, runtime, genre, year) => {
    
    const result = await axios.get(`${baseUrl}discover/${format}`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'es-ES',
            time: runtime,
            with_genres: genre,
            'primary_release_date.lte': year,
        },
    });
    return result.data.results;
};

export {
    getProviders,
    getMovies,
    getTvShows,
    getGenres,
    getMovieDetails,
    findRandomMedia,
    getRecommendation,
};
