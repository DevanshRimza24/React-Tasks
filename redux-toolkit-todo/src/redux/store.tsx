import { configureStore } from '@reduxjs/toolkit'
import { tokenSlice } from './slices/token'
// import tokenReducer from '../redux/slices/token'

export const store = configureStore({
  reducer: {
    token : tokenSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch