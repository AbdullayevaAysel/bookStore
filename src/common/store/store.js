import { configureStore } from '@reduxjs/toolkit'
import folderReducer from './features/folderSlice';
import fileReducer from './features/folderSlice'

export default configureStore({
  reducer: {
    folder: folderReducer,
    file:fileReducer
  },
})