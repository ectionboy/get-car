import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { carsInitialState } from './initialState';
import { fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const loadMoreCars = createAsyncThunk(
  'cars/loadMore',
  async (page, { dispatch }) => {
    try {
      const response = await fetchCars(page);

      dispatch(carsSlice.actions.addCars(response));

      return response;
    } catch (error) {
      throw error;
    }
  }
);

 const carsSlice = createSlice({
    name: 'cars',
    initialState: carsInitialState,
    extraReducers: builder => {
      builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchCars.rejected, handleRejected);
    },
  });
  
  export const { addCarsb } = carsSlice.actions;
  export const carsReducer = carsSlice.reducer;

