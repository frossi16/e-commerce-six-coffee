//CONFIG STORE ARIEL
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userLoginReducer from "./userLogin";

import productosReducer from "./productos";

import ventasReducer from "./ventas";

import setUserDBReducer from "./userDB";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    userLogin: userLoginReducer,
    userDB: setUserDBReducer,
    productos: productosReducer,
    ventas: ventasReducer,
  },
});

export default store;
