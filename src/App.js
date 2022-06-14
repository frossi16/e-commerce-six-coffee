import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SingUp";
import LogIn from "./components/LogIn";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { userLoged } from "./state/userLogin";
import Grid from "./components/Grid"
import SingleProduct from "./components/SingleProduct"




=======
import Shopping from './components/Shopping'
import { AuthContextProvider } from './hooks/AuthContextProvider.jsx'
>>>>>>> origin/vistaCarrito

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
      {/*  <AuthContextProvider>  */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Grid />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
<<<<<<< HEAD
        <Route path="/products/:id" element={<SingleProduct />} />
=======
        <Route path="/shopping" element={<Shopping />} />
>>>>>>> origin/vistaCarrito
      </Routes>
      <Footer />
      {/*   </AuthContextProvider>    */}
    </>
  );
};

export default App;
