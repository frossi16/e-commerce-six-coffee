import React from "react";
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
    <button type="button" onClick={handlerClickLogOut}>
      LogOut
    </button>
  );
}
export default LogOut;
