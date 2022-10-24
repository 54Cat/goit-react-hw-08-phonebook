import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from 'store/phonebookSlice';
import filterReducer from 'store/filterSlice';

export default configureStore({
    reducer: {
        phonebook: phonebookReducer,
        filter: filterReducer,
    }
});