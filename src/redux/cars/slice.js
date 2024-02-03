import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { carsInitialState } from './initialState';
import { fetchCars } from './operations';
import { getCars } from './helpers';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
const arrThunk = [fetchCars];
const arrTypeThunk = type => arrThunk.map(el => el[type]);

const handlePending = state => {
    state.isLoading = true;
  };
  const handleFulfilled = state => {
    state.isLoading = false;
    state.error = null;
  };
  
  const handleRejected = (state, { error }) => {
    state.isLoading = false;
    state.error = error.message;
  };

  const carsSlice = createSlice({
    name: 'cars',
    initialState: carsInitialState,
    extraReducers: builder => {
      const { PENDING, FULFILLED, REJECTED } = STATUS;
      builder
        .addCase(fetchCars.fulfilled, getCars)
        .addMatcher(isAnyOf(...arrTypeThunk(PENDING)), handlePending)
        .addMatcher(isAnyOf(...arrTypeThunk(FULFILLED)), handleFulfilled)
        .addMatcher(isAnyOf(...arrTypeThunk(REJECTED)), handleRejected);
    },
  });
  
  export const carsReducer = carsSlice.reducer;

