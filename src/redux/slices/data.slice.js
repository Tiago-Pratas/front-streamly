import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getProviders } from '../../api/tmdb';

const INITIAL_STATE={
    providers:[],
    movies:[],
    tvShow:[]
};

export const getAllProviders = createAsyncThunk( 'tmdb/getProviders',
    async () => { return await getProviders(); }
    
);

export const dataSlice =createSlice({
    name:'tmdb',
    initialState: INITIAL_STATE,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProviders.fulfilled, (state, action)=>{
            state.providers = action.payload;
        });
    }
});
