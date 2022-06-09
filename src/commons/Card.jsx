import React from 'react'

const Card = ({product}) => {
  return (
    <Link to ={`/products/${product.id}}`}>
      <div>
          <img src = {product.image} alt ={`${product.name}`}/>
          <p>{product.name}</p>
          <p>{product.price}</p>
      </div>
    </Link>

  )
}

export default Card