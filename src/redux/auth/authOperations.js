import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
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
        return thunkAPI.rejectWithValue(error);
    }
  }
);
