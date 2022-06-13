import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  console.log(product);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/products/${id}}`);
  };

  const handleCarrito = (productId, userId) => {
    
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
      <button className="btn btn-danger" onClick={handleCarrito}>Agregar al carrito</button>
    </div>
  );
};

export default Card;
