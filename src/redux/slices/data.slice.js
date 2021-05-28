import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProviders, getTvShows, getMovies, getGenres, findRandomMedia } from '../../api/tmdb';

const INITIAL_STATE = {
    providers: [],
    movies: [],
    tvShows: [],
    topFilter: '',
    genres: [],
    searchResults: [],
};

export const getAllProviders = createAsyncThunk(
    'tmdb/getProviders',
    async () => {
        return await getProviders();
    }
);

export const getAllTvShows = createAsyncThunk(
    'tmdb/getTvShows',
    async (data) => {
        return await getTvShows(data);
    }
);

export const getAllMovies = createAsyncThunk('tmdb/getMovies', async (data) => {
    return await getMovies(data);
});

export const getAllGenres = createAsyncThunk('tmdb/getGenres', async (data) => {
    return await getGenres(data);
});

export const searchMediaAsync = createAsyncThunk('tmdb/searchMediaAsync', async (data) => {
    return await findRandomMedia(data);
});

export const dataSlice = createSlice({
    name: 'tmdb',
    initialState: INITIAL_STATE,
    reducers: {
        filterProviders: (state, action) => {
            state.topFilter = state.topFilter+=`|${action.payload}`;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProviders.fulfilled, (state, action) => {
            state.providers = action.payload;
        });

        builder.addCase(getAllTvShows.fulfilled, (state, action) => {
            state.tvShows = action.payload;
        });

        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        });

        builder.addCase(getAllGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
        });

        builder.addCase(searchMediaAsync.fulfilled, (state, action) => {
            state.searchResults = action.payload.results;
        });
    },
});

export const { filterProviders } = dataSlice.actions;
