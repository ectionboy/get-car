import { createSlice } from '@reduxjs/toolkit';
import { filtersInitialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;