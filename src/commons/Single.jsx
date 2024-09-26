import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCategory } from '../state/categories';
import { deleteProduct } from '../state/productos';

const Single = ({element,type}) => {
    const dispatch = useDispatch();
    
    const handleClick= ()=>{

        dispatch(deleteCategory(element))
    } 
    const handleClickProducts= ()=>{

      dispatch(deleteProduct(element))
  } 

  return type==="products" ? 

   (
    <>
        <div className='col-10 py-3 border d-flex justify-content-between'>
        {element.categoryName || element.title}
        <button className=" btn btn-danger btn-search" onClick={handleClickProducts}>Eliminar</button>
        </div>
    </>
  )
  :
  (
    <>
        <div className='col-10 py-3 border d-flex justify-content-between'>
        {element.categoryName || element.title}
        <button className=" btn btn-danger btn-search" onClick={handleClick}>Eliminar</button>
        </div>
    </>
  )
}

export default Single