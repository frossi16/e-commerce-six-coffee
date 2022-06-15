import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProduct = createAsyncThunk("GET_ONE_PRODUCT", (value) => {
  return axios
    .get(`http://localhost:3030/products/${value}`)
    .then((res) => res.data);
});

const singleProductReducer = createReducer({}, {
  [getSingleProduct.fulfilled]: (state, action) => action.payload,
});

export default singleProductReducer;
