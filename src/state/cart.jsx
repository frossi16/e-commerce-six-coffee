import { createAsyncThunk, createReducer, current } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("ADD_TO_CART", async (value) => {
  console.log(value);
  const product = await axios.get(
    `http://localhost:3030/products/${value.productId}`
  );
  console.log(product);
  const productAdded = await axios.post("http://localhost:3030/ventas/add", {
    idUser: value.idUser,
    idProducto: value.productId,
    img: product.data.image,
    nameProducto: product.data.title,
    price: product.data.price,
    cant: value.cant,
  });
  return productAdded.data;
});

export const getCart = createAsyncThunk("GET_CART", async (value) => {
  const carrito = await axios.get(`http://localhost:3030/carrito/${value}`);
  return carrito.data;
});

/* Eliminar un item del carrito */
export const deleteCart = createAsyncThunk("DELETE_CART", async (value) => {
  /* Sabri: Hacer que concida con las rutas del back, recibe el id del usuario y del producto */
  const item = await axios.delete(
    `http://localhost:3030/carrito/removeItem/${value}/${value.productId}`
  );
  return value;
});

/* Permite actualizar las cantidades */
export const updateCart = createAsyncThunk("UPDATE_CART", async (value) => {
  const item = await axios.put(`http://localhost:3030/carrito`, {
    cant: value.cant,
    idProducto: value.idProducto,
    idUser: value.idUser,
  });
  return value;
});

/* Revisar si es correcto */
const cartReducer = createReducer([], {
  [addToCart.fulfilled]: (state, action) => [...current(state), action.payload],
  [getCart.fulfilled]: (state, action) => action.payload,
  [deleteCart.fulfilled]: (state, action) => {
    let aux = [...state];
    let aux2 = aux.filter((product) => {
      if (product.idProducto !== action.payload.productId) {
        return product;
      }
    });
    return aux2;
  },
  [updateCart.fulfilled]: (state, action) => {
    let nuevaCant = action.payload.cant
    let aux = [...current(state)];
    let aux2 = aux.map((product) => {
      if (product.idProducto === action.payload.idProducto) {
        const nuevoProd = {...product}
        nuevoProd.cant = nuevaCant;
        return nuevoProd;
      } else {
        return product;
      }
    });
    return aux2;
  },
});

export default cartReducer;
