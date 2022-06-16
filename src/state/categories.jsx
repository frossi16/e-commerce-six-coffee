import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";


export const getCategories = createAsyncThunk("GET_CATEGORY", async() => {
  const res= await axios
    .get("http://localhost:3030/category")
  return res.data
  });

export const addCategory = createAsyncThunk("ADD_CATEGORY", async(value) => {
  const res=await axios
    .post("http://localhost:3030/category",value)
    return res.data[0]
});

export const deleteCategory = createAsyncThunk("DELETE_CATEGORY", async(value) => {
  await axios
    .delete(`http://localhost:3030/category/${value._id}`)
  return value
});

const categoriesReducer = createReducer([], {
  [getCategories.fulfilled]: (state, action) => action.payload,
  [deleteCategory.fulfilled]: (state, action) => {
    let aux = [...state];
    let aux2 = aux.filter((category)=>{
      if(category._id !== action.payload._id)
      {
        return category
      }
    })
    return aux2;
  },
  [addCategory.fulfilled]: (state, action) => [...current(state),action.payload],

});

export default categoriesReducer;
