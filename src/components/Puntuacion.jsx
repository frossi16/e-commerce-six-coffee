import React from "react";

const Puntuacion = ({promedio}) => {
  return promedio? (
    <>
      <p className="titleForm"> <strong>Puntuacion</strong></p>
      <p>{promedio.toFixed(2)}</p>
    </>
  ): null;
};

export default Puntuacion;
