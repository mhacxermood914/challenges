/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import {
//   persistReducer,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { petsApi } from 'services/api/pets';
// import authSlice from './slices/auth';
// import membersSlice from './slices/members';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({
//   [petsApi.reducerPath]: petsApi.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [petsApi.reducerPath]: petsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(petsApi.middleware),
});
