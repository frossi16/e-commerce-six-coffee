import React from "react";
import { addToCart } from "../state/cart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ButtonAddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();

  const handleCarrito = (productId, userId) => {
      dispatch(addToCart({ productId: productId, idUser: userId, cant: 1 }));
    }


  return product.stock ? (
    <button
      className="btn btn-danger"
      onClick={() => {
        if (!user) {
          navigate("/login");
        } else {
        handleCarrito(product._id, user._id);}
      }}
    >
      Agregar al carrito
    </button>
  ) : (
    <button disabled={true} className="btn btn-danger">
      Sin Stock
    </button>
  );
};

export default ButtonAddToCart;
