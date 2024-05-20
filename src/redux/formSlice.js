import { createSlice } from '@reduxjs/toolkit'

const initialState ={name:"" , lastName:"" ,userName:"" , email:"" }

export const formSlice = createSlice({

  name: 'form',
  initialState,
 
  reducers: {
    addFirstName: (state, action) => {
      const name = action.payload.target.value 
      state.name = name
    },
    addLastName: (state, action) => {
      const lastName = action.payload.target.value 
      state.lastName = lastName
    },
    addUserName: (state, action) => {
      const userName= action.payload.target.value 
      state.userName = userName
    }, 
    addEmail: (state, action) => {
      const email = action.payload.target.value 
      state.email = email
    }, 
  },
})

export const { addFirstName , addLastName , addUserName ,addEmail} =formSlice.actions

export default formSlice.reducer