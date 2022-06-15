import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentCard from "../commons/CommentCard";
import Puntuacion from "./Puntuacion";
import AddComment from "../commons/AddComment";
import { getSingleProduct } from "../state/singleProduct";
import { useDispatch,useSelector } from "react-redux";
import { getReviews } from "../state/reviews";
import { addToCart } from "../state/cart";

const SingleProduct = () => {
  const params = useParams();
  const clearId = params.id.slice(0, params.id.length - 1);
  const product = useSelector(state=>state.singleProduct);
  const user = useSelector(state=>state.userLogin)

  const peopleComments = useSelector(state=>state.reviews)
  console.log(peopleComments)
  const sumatoria = peopleComments.reduce((acc, comment) => {
    return (acc += comment.puntuation);
  }, 0);
  const promedio = sumatoria / peopleComments.length;
  const [units, setUnits] = useState(1);
  const dispatch = useDispatch();

  const handleCarrito = (productId, userId,units) => {
    dispatch(addToCart({productId:productId,idUser:userId,cant:units}))
  };

  useEffect(() => {
    dispatch(getSingleProduct(clearId));
    dispatch(getReviews(clearId));
  }, [peopleComments.length]);

  return (
    <div className="row cols py-5 ">
      <div className="col-6 d-flex justify-content-center">
        <img className="viewImg" src={`${product.image}`} alt={product.title} />
      </div>
      <div className="col-6">
        <h2 className="">
          <strong>{product.title}</strong>
        </h2>
        <p className="titleForm">
          <strong>Categoria:</strong>
        </p>
        <p>{product.category}</p>
        <p className="titleForm">
          <strong>Descripción:</strong>
        </p>
        <p>{product.description}</p>
        <Puntuacion promedio={promedio} />
        <h3 className="">${product.price}</h3>
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-5 d-flex justify-content-end">
                <button
                  className="btn btn-danger stockButton"
                  disabled={units === 1}
                  onClick={() => {
                    setUnits(units - 1);
                  }}
                >
                  -
                </button>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <div>{units}</div>
              </div>
              <div className="col-5 d-flex justify-content-start">
                <button
                  className=" btn btn-danger stockButton"
                  disabled={units === product.stock}
                  onClick={() => {
                    setUnits(units + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col-8 d-flex justify-content-start">
            {/* falta agregar con las rutas del carrito */}
            <button onClick={()=>{handleCarrito(product._id,user._id,units)}} className="cartButton btn btn-danger ">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <div className="row cols py-5">
        <div className="col-6    ">
          <div className="row mx-5 justify-content-between">
            <p className="comm-punt col-6 p-0">
              <strong>Comentarios</strong>
            </p>
            <p className="comm-punt col-6  pr-5">
              <strong>Puntuacion</strong>
            </p>
          </div>
          <div className="containerComments my-2 mx-3">
            {peopleComments.map((comment) => {
              return <CommentCard comment={comment} />;
            })}
          </div>
        </div>
        <div className="col-6">
          <AddComment clearId={clearId} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
