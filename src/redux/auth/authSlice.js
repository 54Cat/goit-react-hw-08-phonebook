import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './authOperations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoading: false,
  isLoadingCurrentUser: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {

    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },


    [login.pending](state) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    
    [logout.pending](state) {
      state.isLoading = true;
    },
    [logout.fulfilled](state, action) {
      state.isLoading = false;
      state.user = { name: null, email: null, };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
