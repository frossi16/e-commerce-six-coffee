import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import Card from '../commons/Card';

export const Grid = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  return (
    <div>
        {products.map((product)=>{
            return <Card product = {product}/>
        })}
    </div>
  )
}
