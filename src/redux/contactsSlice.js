import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push({
                id: nanoid(4),
                name: action.payload.name,
                number: action.payload.number,
            });
        },
        deleteContact(state, action) { 
            state.contacts= state.contacts.filter(contact => contact.id !== action.payload.id)
        },
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
export const getContacts = state => state.contacts.contacts;
