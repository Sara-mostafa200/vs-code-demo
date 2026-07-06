import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface IInitialState {
     personalInfo:boolean,
     projectsInfo:boolean
}

const initialState:IInitialState = {
  personalInfo:true,
  projectsInfo:false 
}


const sideBarComponentSlice = createSlice({
    name:'sideBarComponent' ,
    initialState,
    reducers:{
      toggleInfo:(state:IInitialState , action : PayloadAction<IInitialState>)=>{
         state.personalInfo  =  action.payload.personalInfo
         state.projectsInfo  =  action.payload.projectsInfo
      }
    }
})

export const {toggleInfo} = sideBarComponentSlice.actions

export default sideBarComponentSlice.reducer ; 