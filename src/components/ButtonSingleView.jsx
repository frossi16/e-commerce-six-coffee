import React, {useState} from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { addToCart } from "../state/cart";
import { useDispatch,useSelector } from 'react-redux';


const ButtonSingleView = () => {
      
  const [units, setUnits] = useState(1);
  const user = useSelector(state=>state.userLogin)
  const product = useSelector(state=>state.singleProduct);
  const dispatch = useDispatch()


  const handleCarrito = (productId, userId,units) => {
    dispatch(addToCart({productId:productId,idUser:userId,cant:units}))
  };

  return product.stock ? (
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
            <BiMinus />
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
            <BsPlus />
          </button>
        </div>
      </div>
    </div>
    <div className="col-8 d-flex justify-content-start">
      <button onClick={()=>{handleCarrito(product._id,user._id,units)}} className="cartButton btn btn-danger ">
        Agregar al carrito
      </button>
    </div>
  </div>  )

  :
  <button disabled = {true} className="btn btn-danger" >Sin Stock</button>

}

export default ButtonSingleView