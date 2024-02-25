import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { catalogReducer } from './carsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const filterPersistConfig = {
  key: 'filter',
  storage,
  whitelist: ['brand', 'price'],
};
const carsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['selectedCars'],
};

const rootReducer = combineReducers({
  cars: persistReducer(carsPersistConfig, catalogReducer),
  filter: persistReducer(filterPersistConfig, filterReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
