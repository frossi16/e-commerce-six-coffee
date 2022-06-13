import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SingleProduct = () => {
  const params = useParams();
  const clearId = params.id.slice(0, params.id.length - 1);
  const [product, setProduct] = useState({});

  const cont = 1;
  useEffect(() => {
    axios
      .get(`http://localhost:3030/products/${clearId}`)
      .then((res) => res.data)
      .then((prod) => setProduct(prod))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row cols">
      <div className="col-6 d-flex justify-content-center">
        <img className="viewImg" src={`${product.image}`} alt={product.title} />
      </div>
      <div className="col-6">
        <p>{product.title}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-5 d-flex justify-content-end">
                <button className="btn btn-danger stockButton">-</button>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <div>{cont}</div>
              </div>
              <div className="col-5 d-flex justify-content-start">
                <button className=" btn btn-danger stockButton">+</button>
              </div>
            </div>
          </div>
          <div className="col-8 d-flex justify-content-start">
            <button className="cartButton btn btn-danger ">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
