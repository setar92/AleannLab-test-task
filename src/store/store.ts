import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { jobsApi } from './queries/jobs';
import { jobsList } from './root-reducer';

const rootReducer = combineReducers({
  jobsList,
  [jobsApi.reducerPath]: jobsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
