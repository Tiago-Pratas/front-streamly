import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getMoviesAsync = createAsyncThunk();

const dataSlice = createSlice({});

export {
    dataSlice
    getMoviesAsync,
};
