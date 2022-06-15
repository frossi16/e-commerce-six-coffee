import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../commons/Card";
import { getAllProductRequest } from "../state/productos";
import { useParams } from "react-router";
import { getProductsByCateory } from "../state/productByCategory";

const Grid = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productos)
  const {category} = useParams();
  const productByCategory = useSelector(state => state.productsByCategory)
  // const [products, setProducts] = useState([]);

  useEffect(()=>{
    if(category) dispatch(getProductsByCateory({category}))
    else dispatch(getAllProductRequest())
  },[category])


  // useEffect(() => {
  //   axios.get("http://localhost:3030/products/all")
  //   .then(res => res.data)
  //   .then(prod => setProducts(prod));
  // }, []);

  // console.log(products)
  return category ? 
  (
    <>
      <h2  className="grilla m-0 py-5 px-5"><strong>{category.toUpperCase()}</strong></h2>
      <div className="grilla">
        {productByCategory.map((product) => {
          return <Card key={product._id} product={product} />;
        })}
      </div>
    </>

  )
  : (
    <>
    <h2  className="grilla m-0 py-5 px-5"><strong>TODOS LOS PRODUCTOS</strong></h2>

    <div className="grilla">
      {products.map((product) => {
        return <Card key={product._id} product={product} />;
      })}
    </div>
    </>

  );
};

export default Grid;
