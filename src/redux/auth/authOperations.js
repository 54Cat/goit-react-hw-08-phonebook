import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const register = createAsyncThunk("auth/register",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            toast.error(`This user already exists, please try to login!`);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    // console.log("credentials", credentials.values)
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
        toast.warning(`The username or password is incorrect. Please try again!`);
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    
    try {
      token.set(persistedToken);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
