import { createAsyncThunk, createReducer, current } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("ADD_TO_CART", async (value) => {
  const product = await axios.get(
    `http://localhost:3030/products/${value.productId}`
  );
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
  /* Sabri: Hacer que concida con las rutas del back, recibe el id del usuario y del produc
  to */
  const item = await axios.delete(`http://localhost:3030/carrito/removeItem/${value.idProducto}/${value.idUser}`);
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
  [addToCart.fulfilled]: (state, action) => {
    let validar = false
    let nuevaCant = action.payload.cant;
    const aux = [...current(state)]
    let aux2 = aux.map((product) => {
      if (product.idProducto === action.payload.idProducto) {
        validar = true
        const nuevoProd = { ...product };
        nuevoProd.cant += nuevaCant;
        return nuevoProd;
      } else {
        return product;
      }
    });
    if(validar)
      return aux2
    else
      return [...current(state), action.payload]
  },
  [getCart.fulfilled]: (state, action) => action.payload,
  [deleteCart.fulfilled]: (state, action) => {
    let aux = [...current(state)];
    console.log(aux, '    aux')
    console.log(action.payload, ' action payload')
    let aux2 = aux.filter((product) => {
      if (product.idProducto !== action.payload.idProducto) {
        return product;
      }
    });
    console.log(aux2)
    return aux2;
  },
  [updateCart.fulfilled]: (state, action) => {
    let nuevaCant = action.payload.cant;
    let aux = [...current(state)];
    let aux2 = aux.map((product) => {
      if (product.idProducto === action.payload.idProducto) {
        const nuevoProd = { ...product };
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
