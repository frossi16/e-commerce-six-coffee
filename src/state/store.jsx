//CONFIG STORE ARIEL
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userLoginReducer from "./userLogin";
import productosReducer from "./productos";
import ventasReducer from "./ventas";
import setUserDBReducer from "./userDB";
import singleProductReducer from "./singleProduct";
import reviewsReducer from "./reviews";
import categoriesReducer from "./categories";
import productsCategoryReducer from "./productByCategory";
import cartReducer from "./cart";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    userLogin: userLoginReducer,
    userDB: setUserDBReducer,
    productos: productosReducer,
    ventas: ventasReducer,
    singleProduct: singleProductReducer,
    reviews: reviewsReducer,
    categories: categoriesReducer,
    productsByCategory:productsCategoryReducer,
    cart:cartReducer,
  },
});

export default store;
