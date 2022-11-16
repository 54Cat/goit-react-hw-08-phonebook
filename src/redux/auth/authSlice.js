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
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
      
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },

    
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    
      
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null, };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      state.error = action.payload;
    },
  }
});

const persistConfig = {
  key: 'auth',
  storage,
}

export const authReducer = persistReducer(persistConfig, authSlice.reducer)
