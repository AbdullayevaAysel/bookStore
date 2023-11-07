import { configureStore } from '@reduxjs/toolkit'
import folderReducer from './features/folderSlice'

export default configureStore({
  reducer: {
    folder: folderReducer
  },
})