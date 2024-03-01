import { configureStore } from '@reduxjs/toolkit'
import  openedFileAction  from './features/FiletreeSlice'
// ...
const store = configureStore({
  reducer: {
    treeFile:openedFileAction
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store