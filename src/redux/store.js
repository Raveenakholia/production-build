/** @format */

import { configureStore } from '@reduxjs/toolkit';
import portFolioReducer from './portfolioSlice';

export const store = configureStore({
  reducer: {
    projects: portFolioReducer,
  },
});
