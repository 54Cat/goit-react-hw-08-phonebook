import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContact = createAsyncThunk(
    "contacts/fetch",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async ({name, number}, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", { name, number });
      return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
  }
);