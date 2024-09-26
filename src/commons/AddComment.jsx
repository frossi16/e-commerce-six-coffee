import React, { useState } from "react";
import axios from "axios"
import useInput from "../hooks/useInput";
import { addReviews } from "../state/reviews";
import {useSelector,useDispatch} from "react-redux"

const AddComment = ({clearId}) => {
    const [puntuation, setPuntuation] = useState(null);
    const comment = useInput("")
    const dispatch = useDispatch();
    const user = useSelector(state=>state.userLogin)

    const commentSubmit = (e) => {
        e.preventDefault();
        // axios
        //   .post(`http://localhost:3030/products/${clearId}/reviews`, {
        //     comment: comment.value,
        //     productId: clearId,
        //     puntuation: puntuation,
        //   })
        //   .then((res) => console.log(res))
        //   .catch((err) => console.log(err));
        dispatch(addReviews({
          comment: comment.value,
          productId: clearId,
          puntuation: puntuation,
        }))
      };

      return  user._id ?
   (
    <>
      <p><strong>Agregar comentarios</strong></p>
      <form className="row" onSubmit={commentSubmit}>
        <label className="col-8">
            
          Comentario:
          <input className="commentBox container-md" {...comment} />
          <div className="d-flex justify-content-end">
            <button
              disabled={!puntuation || !comment.value}
              className="cartButton btn btn-danger my-3"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </label>
        <label className="col-4 ">
          Puntuacion
          <div className="puntuation">
            <select
              onChange={(e) => {
                setPuntuation(e.target.value);
              }}
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </label>
      </form>
    </>
  ):null;
  
};

export default AddComment;
