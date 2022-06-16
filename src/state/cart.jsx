import { createAsyncThunk, createReducer,current } from "@reduxjs/toolkit";
import axios from "axios";



export const addToCart = createAsyncThunk("ADD_TO_CART", async (value) => {

  const product = await axios.get(`http://localhost:3030/products/${value.productId}`)
  const productAdded = await axios.post("http://localhost:3030/ventas/add", { idUser: value.idUser, idProduct: value.productiId, img: product.data.image, nameProducto: product.data.title, price: product.data.price, cant: value.cant })
  return productAdded.data;

});

export const getCart = createAsyncThunk("GET_CART", async (value) => {

  const carrito = await axios.get(`http://localhost:3030/carrito/${value}`)
  return carrito.data;

});

/* Eliminar un item del carrito */
export const deleteCart = createAsyncThunk("DELETE_CART", async (value) => {

  /* Sabri: Hacer que concida con las rutas del back, recibe el id del usuario y del producto */
  const item = await axios.delete(`http://localhost:3030/carrito/removeItem/${value}/${value.productId}`)
  return item.data;
});

/* Permite actualizar las cantidades */
export const updateCart = createAsyncThunk("UPDATE_CART", async (value) => {

  const item = await axios.put(`http://localhost:3030/carrito/removeItem/${value}/${value.productId}`)
  return item.data;
});


/* Revisar si es correcto */
const cartReducer = createReducer([], {
  [addToCart.fulfilled]: (state, action) => [...current(state), action.payload],
  [getCart.fulfilled]: (state, action) => action.payload,
  [deleteCart.fulfilled]: (state, action) => action.payload,
  [updateCart.fulfilled]: (state, action) => action.payload,

});

export default cartReducer;
