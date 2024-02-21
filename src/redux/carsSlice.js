import { createSlice } from '@reduxjs/toolkit';
import {
  addFavorite,
  deleteFavorite,
  fetchCatalog,
  fetchFavorites,
} from './server';

const initialState = {
  catalog: [],
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
    // addFavorite(state, action) {
    //   // state.selectedCars = action.payload;
    //   state.selectedCars = [...state.selectedCars, action.payload];
    //   // state.selectedCars = state.selectedCars.push(action.payload);
    // },
    // deleteFavorite(state, action) {
    //   state.selectedCars = state.selectedCars.filter(
    //     item => item.id !== action.payload
    //   );
    // },
    // addFavorite(state, action) {
    //   // state.selectedCars = action.payload;
    //   state.selectedCars = [...state.selectedCars, action.payload];
    //   // state.selectedCars = state.selectedCars.push(action.payload);
    // },
    // deleteFavorite(state, action) {
    //   state.selectedCars = state.selectedCars.filter(
    //     item => item.id !== action.payload
    //   );
    // },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.catalog = state.catalog.concat(action.payload);
      })
      .addCase(fetchCatalog.rejected, handleRejected);

    builder
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
      .addCase(addFavorite.rejected, handleRejected);

    builder
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
        state.selectedCars = state.selectedCars.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(deleteFavorite.rejected, handleRejected);

    builder
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
