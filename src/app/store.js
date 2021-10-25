import { configureStore } from '@reduxjs/toolkit';
import webScraperSlice from '../features/webScraper/webScraperSlice';

export const store = configureStore({
  reducer: {
    [webScraperSlice.name]: webScraperSlice.reducer,
  },
});
