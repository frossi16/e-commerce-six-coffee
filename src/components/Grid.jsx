import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../commons/Card";
import axios from "axios";
import header from '../assets/headerProductos.jpg'

const Grid = () => {
  // const dispatch = useDispatch();
  // const products = useSelector(state => state.products)
  const [products, setProducts] = useState([]);
  // useEffect(()=>{
  //   dispatch(getAllProducts())
  // },[])

  useEffect(() => {
    axios.get("http://localhost:3030/products/all")
    .then(res => res.data)
    .then(prod => setProducts(prod));
  }, []);

  // console.log(products)
  return (
    <>
     <div className='text-bg-light'>
      <img src={header} className='rounded mx-auto d-block' alt="..."/>
      </div>
      
    <div className="grilla">
      {products.map((product) => {
        return <Card product={product} />;
      })}
    </div>
    </>
  );
};

export default Grid;
