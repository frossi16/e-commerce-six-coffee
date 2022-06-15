import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk("GET_REVIEWS",(value) => {
  return axios
    .get(`http://localhost:3030/products/${value}/reviews`)
    .then((res) => res.data);
});

export const addReviews = createAsyncThunk("ADD_REVIEWS",(value) => {
  console.log("ELCOMENTARIO",value)
    return axios
      .post(`http://localhost:3030/products/${value}/reviews`,{
            comment: value.comment,
            productId: value.productId,
            puntuation: value.puntuation,
          })
      .then(res=>res.data)
  });

const reviewsReducer = createReducer([], {
  [getReviews.fulfilled]: (state, action) => action.payload,
  [addReviews.fulfilled]: (state, action) => [...current(state),action.payload],
});

export default reviewsReducer;
