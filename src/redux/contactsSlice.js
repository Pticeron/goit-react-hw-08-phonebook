import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pendingReduser = state => {
  state.isLoading = true;
  state.error = null;
};
const rejectedReduser = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fetchContactsFulfilledReduser = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const addContactFulfilledReduser = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, action.payload];
};
const deleteContactFulfilledReduser = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, pendingReduser)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReduser)
      .addCase(fetchContacts.rejected, rejectedReduser)
      .addCase(addContact.pending, pendingReduser)
      .addCase(addContact.fulfilled, addContactFulfilledReduser)
      .addCase(addContact.rejected, rejectedReduser)
      .addCase(deleteContact.pending, pendingReduser)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReduser)
      .addCase(deleteContact.rejected, rejectedReduser),
});

export const contactsReducer = contactsSlice.reducer;

