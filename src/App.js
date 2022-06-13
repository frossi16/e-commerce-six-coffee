import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './components/SingUp1'
import LogIn from './components/LogIn1'


/* Sabri: Los archivos de Formularios y Form son sigup y login con estilos. Tienen arreglado el axios, faltarían las validaciones*/


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={< LogIn />} />
      </Routes>
      <Footer />
    </>
  );
};


export default App;
