import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

export const getAllVentasRequest = createAsyncThunk(
  "GET_VENTAS",
  async (value) => {
    const venta = await axios.get(`http://localhost:3030/historial/${value}`);
    console.log(venta)
    return venta.data;
  }
);

export const addToVentas = createAsyncThunk("ADD_TO_VENTAS", async (value) => {
  console.log(value + ' value')
  const ventasAdded = await axios.post(
    `http://localhost:3030/historial/${value.userId}`,
    {
      idUser: value.userId,
      venta: value.venta,
    }
  );
  return ventasAdded.data;
});

const ventasReducer = createReducer([], {
  [addToVentas.fulfilled]: (state, action) => [...current(state), action.payload],
  [getAllVentasRequest.fulfilled]: (state, action) => action.payload,
});

export default ventasReducer;
