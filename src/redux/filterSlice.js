import { createSlice } from '@reduxjs/toolkit';
import { filterCars } from './constans';
import { fetchCarsForFilter } from './server';

function getCategoryListString(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

function getCategoryListNumber(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a - b);
  }, []);
}

const filterInit = {
  cars: [],
  brand: [],
  price: [],
  filterCars,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInit,
  reducers: {
    setBrand(state, action) {
      state.filterCars.brand = action.payload;
    },
    setPrice(state, action) {
      state.filterCars.price = action.payload;
    },
    getFilterCars(state, action) {
      state.filterCars = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCarsForFilter.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.brand = getCategoryListString(state.cars, 'make');
      state.price = getCategoryListNumber(state.cars, 'rentalPrice');
    });
  },
});

export const { setBrand, setPrice, getFilterCars } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
