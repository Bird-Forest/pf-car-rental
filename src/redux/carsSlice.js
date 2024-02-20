import { createSlice } from '@reduxjs/toolkit';
import {
  addFavorite,
  deleteFavorite,
  fetchCatalog,
  fetchFavorites,
} from './server';

const initialState = {
  catalog: [],
  cars: [],
  selectedCars: [],
  page: 1,
  status: 'idle',
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addPage(state) {
      state.page = state.page + 1;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.catalog = state.catalog.concat(action.payload);
      })
      .addCase(fetchCatalog.rejected, handleRejected)

      // .addCase(fetchCars.pending, handlePending)
      // .addCase(fetchCars.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.cars = action.payload;
      // })
      // .addCase(fetchCars.rejected, handleRejected)

      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.catalog = state.catalog.map(item => {
          if (item.id === action.payload.id) {
            item.completed = true;
          }
          return item;
        });
      })
      .addCase(addFavorite.rejected, handleRejected)

      .addCase(deleteFavorite.pending, handlePending)
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.catalog = state.catalog.map(item => {
          if (item.id === action.payload.id) {
            item.completed = false;
          }
          return item;
        });
      })
      .addCase(deleteFavorite.rejected, handleRejected)

      .addCase(fetchFavorites.pending, handlePending)
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectedCars = action.payload;
      })
      .addCase(fetchFavorites.rejected, handleRejected);
  },
});

export const catalogReducer = carsSlice.reducer;
export const { addPage } = carsSlice.actions;
