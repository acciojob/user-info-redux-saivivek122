import { createSlice } from "@reduxjs/toolkit";


const initialState={
    name:"",
    email:"",
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        addUserName:(state,action)=>{
            state.name=action.payload
        },
        addUserEmail:(state,action)=>{
            state.email=action.payload
        }
    }

})

export const {addUserName,addUserEmail}=userSlice.actions;
export default userSlice.reducer
