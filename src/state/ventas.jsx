



import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllVentasRequest = createAsyncThunk("VENTAS", () => {
  return axios
    .get("http://localhost:3030/ventas/all")
    .then((res) => res.data);
});

const ventasReducer = createReducer(
    [], {
  [getAllVentasRequest.fulfilled]: (state, action) => action.payload,
});

export default ventasReducer;
