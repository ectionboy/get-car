import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
axios.defaults.baseURL = 'https://652ec9c10b8d8ddac0b1e3ab.mockapi.io/';

export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/favorite');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    },
  );
  
  export const addFavorite = createAsyncThunk(
    'favorites/addFavorite',
    async (data, thunkAPI) => {
      try {
        const response = await axios.post('/favorite', data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    },
  );
  
  export const deleteFavorite = createAsyncThunk(
    'favorites/deleteFavorite',
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/favorite/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    },
  );