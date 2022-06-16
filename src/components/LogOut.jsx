import React from "react";
import { BsPersonX } from 'react-icons/bs'
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userLogOut } from "../state/userLogin";

function LogOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerClickLogOut = () => {

    dispatch(userLogOut());

    navigate("/");

  };

  return (
    /*  <button type="button" >
       LogOut
     </button> */
    <button type="button" className="btn btn-danger" onClick={handlerClickLogOut}><BsPersonX /></button>
  );
}
export default LogOut;
