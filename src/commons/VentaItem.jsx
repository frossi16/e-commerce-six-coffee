import React from "react";
import CarritoProductName from "../components/CarritoProductName";
import { BsCurrencyDollar } from 'react-icons/bs'

const VentaItem = ({ venta }) => {
    console.log(venta + '    venta objeto')
  return (
    <div>
      <div className="row container-col">
        <div className="col container-col">
          <div className="box">
            <div>{venta.venta.map((venta,i) =>{
                return (<div key={i}>
                    <CarritoProductName items={venta} />                    
                </div>)
            })}</div>
          </div>
        </div>
        <div className="col-3 container-col">
          <div className="box">
            {/*Ver como traer el total de la venta*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentaItem;
