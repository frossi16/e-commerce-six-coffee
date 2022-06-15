import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk("GET_CATEGORY", () => {
  return axios
    .get("http://localhost:3030/category")
    .then((res) => res.data);
});

const categoriesReducer = createReducer([], {
  [getCategories.fulfilled]: (state, action) => action.payload,
});

export default categoriesReducer;
