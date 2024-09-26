import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const Orders = () => {
    const user = useSelector(state=>state.userLogin)
    return user._id && !user.admin ?
  (
    <li className="nav-item">
    <Link to={"/orders"} class="nav-link text">
      Mis ordenes
    </Link>
  </li>  ) : null
}

export default Orders