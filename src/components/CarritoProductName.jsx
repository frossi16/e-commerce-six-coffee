import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteCart, getCart, updateCart } from "../state/cart";

const CarritoProductName = ({ items }) => {
  const dispatch = useDispatch();
  const [units, setUnits] = useState(items.cant);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(()=>{
    
  },[])

  const handleDelete = () => {
    dispatch(deleteCart({ idProducto: items.idProducto,
      idUser: user._id}))
  }

  const onClick = (operador) => {
    operador === "+"
      ? dispatch(
          updateCart({
            idProducto: items.idProducto,
            idUser: user._id,
            cant: units + 1,
          })
        )
      : dispatch(
          updateCart({
            idProducto: items.idProducto,
            idUser: user._id,
            cant: units - 1,
          })
        );
  };

  return (
    <div>
      <div className="row container-col">
        <div className="col-4 container-col">
          <div className="box">
            <span>
              <img src={items.img} height={50} width={50} />
            </span>
            <span>{items.nameProducto}</span>
          </div>
        </div>
        <div className="col-3 container-col-">
          <div className="box">
            <BsCurrencyDollar />
            {items.price}
          </div>
        </div>
        <div className="col-3 container-col">
          <div className="box">
            <div className="btn-group" role="group" aria-label="Basic example">
              {/* resta */}
              <button
                disabled={units === 1}
                onClick={() => {
                  setUnits(units - 1);
                  onClick("-");
                }}
                type="button"
                className="btn btn-danger"
              >
                <BiMinus />
              </button>
              {/* cantidad */}
              <button type="number" className="btn">
                {units}
              </button>
              {/* suma */}
              <button
                disabled={units === items.stock}
                onClick={() => {
                  setUnits(units + 1);
                  onClick("+");
                }}
                type="button"
                className="btn btn-danger"
              >
                <BsPlus />
              </button>
              {/* delete */}
              <button type="button" onClick = {handleDelete}className="btn btn-danger">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        </div>
        <div className="col container-col">
          <div className="box">
            <BsCurrencyDollar />
            {units * items.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoProductName;
