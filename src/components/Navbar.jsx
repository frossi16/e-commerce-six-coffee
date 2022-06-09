import React from 'react'
import { BsSearch, BsPersonFill, BsPerson } from "react-icons/bs"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = () => {
    /* Sabri: */
    /* Los tag a van a ser reemplazados por Link en futuro */
    /* Los colores de la navbar pueden cambiar */

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light" /* bg-dark */>
                <div class="container-fluid">
                    <Link class="navbar-brand" to={'/'}>
                        Six-Coffee
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={'/products'} class="nav-link">                             Productos
                                </Link>

                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button type="button" class="btn btn-danger btn-search"><BsSearch /></button>
                        </form>
                        {/* Deslogueado */}
                        <Link to={'/login'}>
                            <button type="button" class="btn btn-danger btn-search"><BsPerson /></button>
                        </Link>
                        {/* logueado. Esto será un toggle */}
                        <button type="button" class="btn btn-danger btn-search"><BsPersonFill /></button>

                        <Link to={'/shopping'}>
                            <button type="button" class="btn btn-danger btn-search"><AiOutlineShoppingCart /></button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )


}

export default Navbar;