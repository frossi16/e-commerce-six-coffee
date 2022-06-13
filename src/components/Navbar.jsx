import React from 'react'
import { BsSearch, BsPerson } from "react-icons/bs"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../sass/navbar.scss'


const Navbar = () => {
    /* Sabri: */
    /* Los tag a van a ser reemplazados por Link en futuro */
    /* Seguro haya que ajustar las cosas por el contador del carrito */

    return (
        <div>
            <nav class="navbar navbar-expand-md ">
                <div class="container-fluid">
                    <Link class="navbar-brand" to={'/'}>
                        <img src={logo} height={50} />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <div class="container">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <Link to={'/products'} class="nav-link text">                 Productos
                                    </Link>

                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link text" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorias
                                    </a>
                                    <ul class="dropdown-menu menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="container md-auto">
                            <form class="d-flex  search" role="search">
                                <input class="form-control me-2 input-search" type="search" placeholder="Search..." aria-label="Search" />
                                <button type="button" class="btn btn-danger btn-search">  <BsSearch /></button>
                            </form>

                        </div>

                        <div class="nav-item dropdown user ms-auto d-flex">
                            <a class="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <button type="button" class="btn btn-danger btn-search"><BsPerson /></button>
                            </a>
                            <ul class="dropdown-menu menu" aria-labelledby="navbarDropdown">
                                <li><Link to={'/register'} class="dropdown-item">Sign Up</Link></li>
                                <li><Link to={'/login'} class="dropdown-item" href="#">Log In</Link></li>
                            </ul>
                        </div>

                        <div class='carrito  ms-auto d-flex'> <Link to={'/shopping'}>
                            <button type="button" class="btn btn-danger btn-search "><AiOutlineShoppingCart /></button>
                        </Link>
                        </div>

                    </div>
                </div>
            </nav >

            <nav class=''>
                <div class="container-fluid">
                    <div class="container">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link text" href="#">Not loging</a>
                            </li>
                            <li>
                                <a class="nav-link text" href="#">¡Hi name!</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )


}

export default Navbar;