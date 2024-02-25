import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.cars.loading;

export const selectError = state => state.cars.error;

export const selectStatus = state => state.cars.status;

export const selectFavorites = state => state.cars.selectedCars;

export const selectCatalog = state => state.cars.catalog;

export const selectPage = state => state.cars.page;

export const selectFilter = state => state.filter.filterCars;

export const selectBrand = state => state.filter.brand;

export const selectPrice = state => state.filter.price;

export const selectVisibleCars = createSelector(
  [selectCatalog, selectFilter],
  (catalog, filter) => {
    // console.log('Calculating visible tasks');
    if (filter.brand !== null) {
      catalog = catalog.filter(item => item.make.includes(filter.brand));
    }
    if (filter.price !== null) {
      catalog = catalog.filter(item => item.rentalPrice <= filter.price);
    }
    return catalog;
  }
);
