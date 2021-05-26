import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
//const imgUrl = 'https://image.tmdb.org/t/p/original/';

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

/* const getMovies = async (provider, date, genre, sort, page) => {
    const response = await axios.get(`${baseUrl}discover/movie`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            with_watch_providers: `${provider}`,
            with_genres: `${genre}`,
            language: 'es-ES',
            watch_region: 'ES',
            page: `${page}`,
            'release_date.gte': `${date}`,
            sort_by: `${sort}`,
        },
    });

    return response.data;
}; */

const getTvShows = async (provider) => {
    const responseTv = await axios.get(`${baseUrl}discover/tv`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            with_watch_providers: `${provider}`,
            language: 'es-ES',
            watch_region: 'ES',
        },
    });
    return responseTv.data.results;
};

const getMovies = async (provider) => {
    const response = await axios.get(`${baseUrl}discover/movie`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            with_watch_providers: `${provider}`,
            page: 1,
            language: 'es-ES',
            watch_region: 'ES',
        },
    });

    return response.data.results;
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
    return [...response.data.genres,  ...responseTv.data.genres];
};

export { getProviders, getMovies, getTvShows, getGenres };
