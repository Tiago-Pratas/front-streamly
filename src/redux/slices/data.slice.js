import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getProviders, getTvShows } from '../../api/tmdb';

const INITIAL_STATE={
    providers:[],
    movies:[],
    tvShows:[]
};

export const getAllProviders = createAsyncThunk( 'tmdb/getProviders',
    async () => { return await getProviders(); }
    
);

export const getAllTvShows = createAsyncThunk('tmdb/getTvShow', 
    async (data) => { return await getTvShows(data); }
);

export const dataSlice = createSlice({
    name:'tmdb',
    initialState: INITIAL_STATE,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProviders.fulfilled, (state, action)=>{
            state.providers = action.payload;
        });

        builder.addCase(getAllTvShows.fulfilled, (state, action) => {
            state.tvShows = action.payload;
        });
    }
});
