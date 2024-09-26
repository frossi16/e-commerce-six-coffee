import React from "react";
import { useSelector } from "react-redux";
import ItemSearch from "./ItemSearch";
export default function Search() {
  const busqueda = useSelector((state) => state.productos);

  console.log(busqueda);

  if (busqueda.length === 0) {
    return (
      <div className="boxBusqueda">
        <h1>No a hecho ninguna busqueda aun...</h1>
      </div>
    );
  } else {
    return (
      <div className="grilla">
        {busqueda.map((item) => {
          return <ItemSearch item={item} />;
        })}
      </div>
    );
  }
}
