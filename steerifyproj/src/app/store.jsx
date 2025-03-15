import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {steerifyApi} from '../services/SteerifyApi'
import navBarReducer from './navBar/navBarSlice'

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    [steerifyApi.reducePath]: steerifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(steerifyApi.middleware),
})

setupListeners(store.dispatch)