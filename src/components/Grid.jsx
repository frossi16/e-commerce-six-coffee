import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../commons/Card";

import { getAllProductRequest } from "../state/productos";
const Grid = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(getAllProductRequest());
  }, []);

  return (
    <div className="grilla">
      {products.map((product) => {
        return <Card product={product} />;
      })}
    </div>
  );
};

export default Grid;
