import { createAction, createReducer } from "@reduxjs/toolkit";

const setProductos = createAction("SET_PRODUCTOS");

const productosReducer = createReducer([],{
    [setProductos]:(state,action)=> action.payloead
})

export default  productosReducer;