/* Sabri: Estado de redux para obtener los items del carrito */

import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllItemsRequest = createAsyncThunk("GET_CARRITO", () => {
    return axios
        .get(`http://localhost:3030/carrito/` /* ${user._id} */)
        .then((res) => res.data);
});

const carritoReducer = createReducer(
    [], {
    [getAllItemsRequest.fulfilled]: (state, action) => action.payload,
});

export default carritoReducer;