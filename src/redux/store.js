import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user.slice';
import { dataSlice } from './slices/data.slice';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        tmdb: dataSlice.reducer,
    },
});
