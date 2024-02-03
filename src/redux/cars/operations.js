import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6569f71cde53105b0dd7f2eb.mockapi.io/api/';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advert');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);