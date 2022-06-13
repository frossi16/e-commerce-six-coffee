
import { createAction, createReducer } from "@reduxjs/toolkit";

const setUserDB = createAction("SET_USERDB");

const setUserDBReducer = createReducer({},{

    
    [setUserDB]:(state,action)=> action.payloead
})

export default  setUserDBReducer;


