import axios from "axios";
import React from "react";
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
    <button type="button" onClick={handlerClickLogOut}>
      LogOut
    </button>
  );
}
export default LogOut;
