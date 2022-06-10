import { createAction, createReducer } from "@reduxjs/toolkit";

const setVentas = createAction("SET_VENTAS");

const ventasReducer = createReducer({},{
    [setVentas]:(state,action)=> action.payloead
})

export default  ventasReducer;