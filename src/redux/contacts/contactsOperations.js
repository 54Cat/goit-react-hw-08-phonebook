import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://635907b2ff3d7bddb99703d3.mockapi.io';

export const fetchContact = createAsyncThunk(
    "contacts/fetchContacts",
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
  "contacts/addContacts",
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
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
  }
);