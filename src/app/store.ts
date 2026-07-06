import { configureStore } from '@reduxjs/toolkit'
import fileTreeSlice from './features/fileTreeSlice'
import sideBarComponent from './features/sideBarActiveComponentsSlice'

export const store = configureStore({
  reducer: {
    tree: fileTreeSlice,
    previewInfo:sideBarComponent
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch