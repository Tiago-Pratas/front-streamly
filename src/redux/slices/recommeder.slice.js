import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    tvOrMovie: '',
    runtime: '',
    genre: '',
    year: '',
};

export const recommenderSlice = createSlice({
    name: 'recommender',
    initialState: INITIAL_STATE,
    reducers: {
        handleInput: (state, action) => {
            if (Object.keys(action.payload) == 'tvOrMovie') {
                state.tvOrMovie = action.payload.tvOrMovie;
            }
            if (Object.keys(action.payload) == 'runtime') {
                state.runtime = action.payload.runtime;
            }
            if (Object.keys(action.payload) == 'genre') {
                state.genre = action.payload.genre;
            }
            if (Object.keys(action.payload) == 'year') {
                state.year = action.payload.year;
            }
        },
    },
});

export const { handleInput } = recommenderSlice.actions;
