import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, register, checkSession } from '../../api/auth';

export const registerAsync = createAsyncThunk('user/register', async (form) => {
    return await register(form);
});

export const loginAsync = createAsyncThunk('user/login', async (form) => {
    return await login(form);
});

export const logoutAsync = createAsyncThunk('logout', async (user) => {
    return await logout(user);
});

export const checkSessionAsync = createAsyncThunk('user/checksession', async () => {
    return await checkSession();
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        hasUser: null,
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {

            if (action.payload.email) {
                state.user = action.payload;
                state.hasUser = true;
                state.error = '';
            } else {
                state.hasUser = false;
                state.error = action.payload;
            }
        });

        builder.addCase(registerAsync.fulfilled, (state, action) => {
            if (Object(action.payload) === action.payload) {
                state.user = action.payload;
                state.hasUser = true;
                state.error = '';
            } else {
                state.hasUser = false;
                state.error = action.payload;
            }
        });

        builder.addCase(checkSessionAsync.fulfilled, (state, action) => {
            if(action.payload.email) {
                state.user = action.payload;
                state.hasUser = true;
                state.error = '';
            }else {
                state.hasUser = false;
                state.error = action.payload.message;
            }
        });

        builder.addCase(logoutAsync.fulfilled, (state) => {
            state.user = null;
            state.hasUser = null;
            state.error = '';
        });
    },
});