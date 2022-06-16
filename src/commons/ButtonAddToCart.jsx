import React from 'react'
import { addToCart } from "../state/cart";
import { useDispatch,useSelector } from 'react-redux';

const ButtonAddToCart = ({product}) => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.userLogin)


    const handleCarrito = (productId, userId) => {
        dispatch(addToCart({productId:productId,idUser:userId,cant:1}))
      };

  return product.stock?(
    <button className="btn btn-danger" onClick={()=>{handleCarrito(product._id,user._id)}}>Agregar al carrito</button>
    )
    :
    (
        <button disabled = {true} className="btn btn-danger" >Sin Stock</button>
    )
}

export default ButtonAddToCart