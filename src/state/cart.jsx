import { createAsyncThunk, createReducer,current } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("ADD_TO_CART", async(value) => {
 const product = await axios.get(`http://localhost:3030/products/${value.productId}`)
 const productAdded = await axios.post("http://localhost:3030/ventas/add",{idUser:value.idUser, idProduct:value.productiId,img:product.data.image,nameProducto:product.data.title , price:product.data.price ,cant:value.cant})
 return productAdded.data;
});

const cartReducer = createReducer([], {
  [addToCart.fulfilled]: (state, action) => [...current(state),action.payload],
});

export default cartReducer;
