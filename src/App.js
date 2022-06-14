import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SingUp";
import LogIn from "./components/LogIn";
import Shopping from './components/Shopping'
import { AuthContextProvider } from './hooks/AuthContextProvider.jsx'

const App = () => {
  return (
    <>
      {/*  <AuthContextProvider>  */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
      <Footer />
      {/*   </AuthContextProvider>    */}
    </>
  );
};

export default App;
