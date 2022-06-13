import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SingUp";
import LogIn from "./components/LogIn";
import Grid from "./components/Grid"
import SingleProduct from "./components/SingleProduct"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Grid />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
