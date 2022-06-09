import React from "react";
import { Route , Routes} from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1> Hola Mundo!!!</h1>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
};

export default App;
