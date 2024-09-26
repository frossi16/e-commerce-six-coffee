import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MenuAdmin = () => {
    const user = useSelector(state=>state.userLogin)

    return user.admin? 
   (
    <li className="nav-item dropdown ">
    <a
      className="nav-link text"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Menu Admin
    </a>
    <ul
      className="dropdown-menu menu"
      aria-labelledby="navbarDropdown"
    >
    <li>
        <Link to = {"admin/users"} className="dropdown-item">
             Usuarios
        </Link>        
    </li>
    <li>
        <Link to = {"admin/products"} className="dropdown-item">
         Productos
        </Link>        
    </li>
    <li>
        <Link to = {"admin/categories"} className="dropdown-item">
         Categorias
        </Link>        
    </li>
    </ul>
    </li>

  )
  :
  null;
}

export default MenuAdmin