import { configureStore } from "@reduxjs/toolkit";
import songSlice from './slices/songSlice'

const store = configureStore({
  reducer: {
    song: songSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store