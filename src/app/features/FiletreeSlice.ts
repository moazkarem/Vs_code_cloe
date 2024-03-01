import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Ifile } from '../../interfaces/Interfaces';
interface IclickedFile{
    filename:string ;
    contentFile:string | undefined ;
    activeTap:number | null
}
export interface Iinitialstate {
    openedfile:Ifile[];
    clickedFile:IclickedFile ;
    tapRemove:number | null
}
const initialState: Iinitialstate = {

  openedfile:[] ,
 clickedFile:{
    filename:'' ,
    contentFile:'' ,
    activeTap:null ,
 } ,
 tapRemove:null
}
export const filetreeSlice = createSlice({
  name: 'treeFile',
  initialState,
  reducers: {
    openedFileAction :(state , action:PayloadAction<Ifile[]>)=>{
      state.openedfile = action.payload
    },
    clickedFileAction:(state , action:PayloadAction<IclickedFile>)=>{
    state.clickedFile = action.payload

    },
    removeTapAction:(state , action:PayloadAction<number | null>)=>{
      state.tapRemove = action.payload
  
      },
   
 

  },
})
export const {openedFileAction , clickedFileAction , removeTapAction } = filetreeSlice.actions

export default filetreeSlice.reducer