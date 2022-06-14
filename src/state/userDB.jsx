import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUserRequest = createAsyncThunk("GET_All_USER", () => {
  return axios.get("http://localhost:3030/user/all").then((res) => res.data);
});

const setUserDBReducer = createReducer(
  {},
  {
    [getAllUserRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default setUserDBReducer;
