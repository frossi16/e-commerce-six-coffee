import React, { useEffect} from "react";
import { useParams } from "react-router";
import CommentCard from "../commons/CommentCard";
import Puntuacion from "./Puntuacion";
import AddComment from "../commons/AddComment";
import { getSingleProduct } from "../state/singleProduct";
import { useDispatch,useSelector } from "react-redux";
import { getReviews } from "../state/reviews";
import ButtonSingleView from "./ButtonSingleView";

const SingleProduct = () => {
  const params = useParams();
  const clearId = params.id.slice(0, params.id.length - 1);
  const product = useSelector(state=>state.singleProduct);

  const peopleComments = useSelector(state=>state.reviews)
  console.log(peopleComments)
  const sumatoria = peopleComments.reduce((acc, comment) => {
    return (acc += comment.puntuation);
  }, 0);
  const promedio = sumatoria / peopleComments.length;
  const dispatch = useDispatch();


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
        <ButtonSingleView />
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
