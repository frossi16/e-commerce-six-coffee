import React from 'react'
import { Link } from "react-router-dom";
const Categories = ({category}) => {

  return (
    <li>
        <Link to = {`category/${category.categoryName}`} className="dropdown-item">
        {category.categoryName}
        </Link>        
    </li>
  )
}

export default Categories