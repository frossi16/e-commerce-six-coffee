import React from "react";
import { Route , Routes} from "react-router-dom";
// import {LogIn, SignUp, Navbar, Header} from "./components";
import LogIn from "./components/LogIn";
import SignUp from './components/SignUp'
import Header from './components/Header'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <>
     <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<h1> Hola Mundo!!!</h1>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
};


export default App;
