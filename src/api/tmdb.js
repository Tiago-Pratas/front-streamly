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

    while (page < 5) {
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

    while (page < 5) {
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

const getRecommendation = async (tvOrMovie, runtime, genre, year, provider) => {
    let runtimeGte;
    let runtimeLte;
    let yearGte;
    let yearLte;

    const providerString = provider;

    if (runtime == 120) {
        runtimeGte = runtime;
    }
    if (runtime == 80) {
        runtimeLte = 120;
        runtimeGte = runtime;
    }
    if (runtime == 80) {
        runtimeLte = runtime;
    }

    if (year == 1980) {
        yearLte = '1980-01-01';
    }
    if (year == 1981) {
        yearLte = '2000-01-01';
        yearGte = '1980-01-01';
    }
    if (year == 2000) {
        yearGte = '2000-01-01';
    }

    if (tvOrMovie == 'movie') {
        const result = await axios.get(`${baseUrl}discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                with_watch_providers: providerString,
                language: 'es-ES',
                watch_region: 'ES',
                'with_runtime.gte': runtimeGte,
                'with_runtime.lte': runtimeLte,
                with_genres: genre,
                'primary_release_date.gte': yearGte,
                'primary_release_date.lte': yearLte,
            },
        });
        console.log(result);
        return result.data;
    } else {
        const resultTv = await axios.get(`${baseUrl}discover/tv`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                with_watch_providers: providerString,
                language: 'es-ES',
                watch_region: 'ES',
                'with_runtime.gte': runtimeGte,
                'with_runtime.lte': runtimeLte,
                with_genres: genre,
                'primary_release_date.gte': yearGte,
                'primary_release_date.lte': yearLte,
            },
        });
        console.log('TV', resultTv);
        return resultTv.data;
    }
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
