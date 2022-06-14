import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SingUp";
import LogIn from "./components/LogIn";

import { Provider } from "react-redux";
import store from "./state/store";


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
};

export default App;
