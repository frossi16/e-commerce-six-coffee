import React from 'react'

export default function ItemSearch({item}) {
  return (
    <div className="cards">
      <div
        onClick={""}
      >
        <img src={item.image} alt={`${item.title}`} />
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
      <button className="btn btn-danger" onClick={""}>Agregar al carrito</button>
    </div>
  )
}
