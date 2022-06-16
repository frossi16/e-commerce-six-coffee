import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUserRequest = createAsyncThunk("GET_All_USER", () => {
  return axios.get("http://localhost:3030/user/all").then((res) => res.data);
});

export const setAdmin = createAsyncThunk("SET_ADMIN", (value) => {
  return axios.put(`http://localhost:3030/user/adminUpdate/${value.userId}`,{admin:value.valor})
  .then((res)=>res.data);
});

export const deleteUser = createAsyncThunk("DELETE_USER", (value) => {
  return axios.delete(`http://localhost:3030/user/${value._id}`)
  .then((res)=>value);
});

const setUserDBReducer = createReducer(
  [],
  {
    [getAllUserRequest.fulfilled]: (state, action) => action.payload,
    [setAdmin.fulfilled]: (state, action) => {
      let aux = [...state];
      let aux2 = aux.map((user)=>{
        if(user._id == action.payload._id)
        {
          return action.payload
        }
        return user;
      })
      return aux2;
    },
    [deleteUser.fulfilled]: (state, action) => {
      let aux = [...state];
      let aux2 = aux.filter((user)=>{
        if(user._id !== action.payload._id)
        {
          return user
        }
      })
      console.log("capooo" + JSON.stringify(aux2))
      return aux2;
    },

  }
);

export default setUserDBReducer;
