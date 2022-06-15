import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProductRequest = createAsyncThunk("PRODUCTOS", () => {
  return axios
    .get("http://localhost:3030/products/all")
    .then((res) => res.data);
});


//serach
export const searchProducts = createAsyncThunk("SEARCH_PRODUCTOS", ({title}) => {
  return axios
    .get(`http://localhost:3030/products/searchByTitle/${title}`)
    .then((res) => res.data);
});



const productosReducer = createReducer(
    [], {
  [getAllProductRequest.fulfilled]: (state, action) => action.payload,
  [searchProducts.fulfilled]: (state, action) => action.payload,
});

export default productosReducer;
