import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/backstSlicer';
export const store = configureStore({
  reducer: {
    backet:basketReducer
  },
})