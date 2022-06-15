import axios from "axios";
import React from "react";
import { BsPersonX } from 'react-icons/bs'
import { useNavigate } from "react-router";

function LogOut() {
  const navigate = useNavigate();

  const handlerClickLogOut = () => {
    axios
      .post(`http://localhost:3030/user/logout`)

      .then(() => {
        localStorage.removeItem("user");
        navigate("/");
        window.location.reload()
      });
  };

  return (
    /*  <button type="button" >
       LogOut
     </button> */
    <button type="button" className="btn btn-danger" onClick={handlerClickLogOut}><BsPersonX /></button>
  );
}
export default LogOut;
