import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from 'store/phonebookSlice';

export default configureStore({
    reducer: {
     phonebook: phonebookReducer,
    }
});