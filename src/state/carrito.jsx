import { createAction, createReducer } from "@reduxjs/toolkit";

const setUserLogin = createAction("SET_USERLOGIN");

const userLoginReducer = createReducer([],{
    [setUserLogin]:(state,action)=> action.payloead
})

export default  userLoginReducer;