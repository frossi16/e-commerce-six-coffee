import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SingUp";
import LogIn from "./components/LogIn";
import { useDispatch } from "react-redux";
import { userLoged } from "./state/userLogin";
import Grid from "./components/Grid";
import SingleProduct from "./components/SingleProduct";
import Shopping from "./components/Shopping";
import AdminCategories from "./components/AdminCategories";
import AdminUsers from "./components/AdminUsers";
import AdminProducts from "./components/AdminProducts";
import Error from "./components/Error";
import UserOrders from "./components/UserOrders";
import Endpoint from './components/Endpoiont'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let userStorage = JSON.parse(localStorage.getItem("user"));

    if (userStorage) {
      dispatch(userLoged(userStorage));
    } else {
      dispatch(userLoged(false));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Grid />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/category/:category" element={<Grid />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Navigate to ="/404" />} />
        <Route path="/orders" element={<UserOrders />} />
        <Route path='/finish' element={<Endpoint />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
