import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsByCateory = createAsyncThunk("GET_PRODUCTS_CATEGORY", (value) => {
  return axios
    .get(`http://localhost:3030/products/category/${value.category}`)
    .then((res) => res.data);
});

const productsCategoryReducer = createReducer([], {
  [getProductsByCateory.fulfilled]: (state, action) => action.payload,
});

export default productsCategoryReducer;
