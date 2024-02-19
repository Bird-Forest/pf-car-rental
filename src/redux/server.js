import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656383fbee04015769a7535a.mockapi.io';

export const fetchCatalog = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/cars?page=${page}&limit=12`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'cars/addFavorite',
  async (idCar, thunkAPI) => {
    try {
      const response = await axios.put(`/cars/${idCar}`, { completed: true });
      return response.data;
    } catch (error) {
      // console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'cars/deleteFavorite',
  async (idCar, thunkAPI) => {
    try {
      const response = await axios.put(`/cars/${idCar}`, {
        completed: false,
      });
      return response.data;
    } catch (error) {
      // console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  'cars/fetchFavorite',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars?completed=true');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
