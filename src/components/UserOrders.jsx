import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import CarritoProductName from './CarritoProductName'
import { getAllVentasRequest } from "../state/ventas";
import VentaItem from "../commons/VentaItem";


const UserOrders = () => {
  const dispatch = useDispatch();
  const ventas = useSelector((state) => state.ventas);
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    dispatch(getAllVentasRequest(user._id))
}, [])


  return (
    <div class="text-bg-light p-3">
      <div>
        <h1 class="text-dark">Compras</h1>

        <div className="row container-col">
          <div className="col container-col">
            <div className="box">
              <h4>Productos</h4>
            </div>
          </div>
          <div className="col-3 container-col">
            <div className="box">
              <h4>Total</h4>
            </div>
          </div>
        </div>
      <hr></hr>
        <div>
          {ventas.map((items, i) => {
            return (
              <div key={i}>
                <VentaItem venta={items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
