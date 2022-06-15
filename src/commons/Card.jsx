import React from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../state/cart";
import { useDispatch,useSelector } from "react-redux";

const Card = ({ key,product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(state=>state.userLogin)

  const handleClick = (id) => {
    navigate(`/products/${id}}`);
  };

  const handleCarrito = (productId, userId) => {
    dispatch(addToCart({productId:productId,idUser:userId,cant:1}))
  };

  return (
    <div className="cards">
      <div
        onClick={() => {
          handleClick(product._id);
        }}
      >
        <img src={product.image} alt={`${product.title}`} />
        <p>{product.title}</p>
        <p>${product.price}</p>
      </div>
      <button className="btn btn-danger" onClick={()=>{handleCarrito(product._id,user._id)}}>Agregar al carrito</button>
    </div>
  );
};

export default Card;
