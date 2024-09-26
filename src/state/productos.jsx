import { createAsyncThunk, createReducer,current } from "@reduxjs/toolkit";

import axios from "axios";

export const getAllProductRequest = createAsyncThunk("GET_ALL_PRODUCTS", async() => {
  const res = await axios
    .get("http://localhost:3030/products/all")
    return res.data;
});

export const addProduct = createAsyncThunk("ADD_PRODUCT", async(value) => {
  const res = await axios
    .post("http://localhost:3030/products",{
      title:value.title,
      price:value.price,
      image:value.image,
      stock:value.stock,
      description:value.description,
      category:value.category

    })
    return res.data
});


export const deleteProduct = createAsyncThunk("DELETE_PRODUCT", async(value) => {
  await axios
    .delete(`http://localhost:3030/products/${value._id}`)
  return value
  });


export const searchProducts = createAsyncThunk("SEARCH_PRODUCTOS", ({title}) => {
  return axios
    .get(`http://localhost:3030/products/searchByTitle/${title}`)
    .then((res) => res.data);
});




const productosReducer = createReducer(
    [], {
  [getAllProductRequest.fulfilled]: (state, action) => action.payload,
  [addProduct.fulfilled]: (state, action) => [...current(state),action.payload],
  [deleteProduct.fulfilled]: (state, action) => {
    let aux = [...state];
    let aux2 = aux.filter((category)=>{
      if(category._id !== action.payload._id)
      {
        return category
      }
    })
    return aux2;
  },

  [searchProducts.fulfilled]: (state, action) => action.payload,
});

export default productosReducer;
