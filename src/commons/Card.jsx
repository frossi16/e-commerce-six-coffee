import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonAddToCart from "./ButtonAddToCart";


const Card = ({ key,product }) => {

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/products/${id}}`);
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
      <ButtonAddToCart product ={product}/>
    </div>
  );
};

export default Card;
