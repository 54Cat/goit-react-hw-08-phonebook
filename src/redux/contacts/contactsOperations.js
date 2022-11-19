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

// export const editContact = createAsyncThunk('contacts/edit',
//     async (id, name, number, thunkAPI) => {
//       const result = {
//         name: name,
//         number: number,
//       }
//       console.log("result", result);
//       console.log("id", id);

//     try {
//       const {data} = await axios.patch(`contacts/${id}`, result );
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   });
