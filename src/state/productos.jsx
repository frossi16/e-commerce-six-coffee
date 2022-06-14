import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProductRequest = createAsyncThunk("PRODUCTOS", () => {
  return axios
    .get("http://localhost:3030/products/all")
    .then((res) => res.data);
});

const productosReducer = createReducer(
    [], {
  [getAllProductRequest.fulfilled]: (state, action) => action.payload,
});

export default productosReducer;
