import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contactsOperations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },

  extraReducers: {
      
    [fetchContact.pending](state) {
      state.isLoading = true;
    },
    [fetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push({
        ...action.payload,
      });
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },


    // [editContact.pending](state) {
    //   state.isLoading = true;
    // },
    // [editContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   const index = state.items.findIndex(item => item.id === action.payload.id);
    //   state.items[index] = action.payload;
    // },
    // [editContact.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

  }
});

export const contactsReducer = contactsSlice.reducer;
