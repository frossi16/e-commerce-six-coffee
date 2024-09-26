import React, { useEffect, useState } from "react";
import axios from 'axios'
import { BsSearch, BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import LogOut from "./LogOut";
import Categories from "./Categories"
import { getCategories } from "../state/categories";
import { getAllItemsRequest } from '../state/itemsCarrito'
import Orders from "./Orders";
import MenuAdmin from "./MenuAdmin";
import { getAllUserRequest } from "../state/userDB";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../state/productos";
import capitalLetter from "../utils/capitalLetter";


const Navbar = () => {


  const navigate = useNavigate();
  const search = useInput();

  const user = useSelector((state) => state.userLogin);
  const categories = useSelector((state)=>state.categories)
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getAllUserRequest())
  },[])




  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchProducts({ title: capitalLetter(search.value) }));
    navigate("/search");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navPosition">
        <div className="container-fluid ">
                    <Link className="navbar-brand" to={"/"}>
                      <img src={logo} height={50} alt="logo" />
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <div className="container">
                        <ul className="navbar-nav me-auto">
                          <li className="nav-item">
                            <Link to={"/products"} class="nav-link text">
                              {" "}
                              Productos
                            </Link>
                          </li>
                          <li className="nav-item dropdown ">
                            <a
                              className="nav-link text"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Categorias
                            </a>
                            <ul
                              className="dropdown-menu menu"
                              aria-labelledby="navbarDropdown"
                            >
                              {
                                categories.map((category)=>{
                                  return <Categories category = {category} />
                                })
                                
                              }
                            </ul>
                          </li>
                          <Orders />
                          <MenuAdmin />
                        </ul>
                      </div>

                      <div className="container md-auto">
              <form
                onSubmit={handleSearch}
                className="d-flex  search"
                role="search"
              >

                <input
                  className="form-control me-2 input-search"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  {...search}
                />
                <button className="btn btn-danger btn-search">
                  <BsSearch />
                </button>
              </form>
            </div>
                      {/* <div className="container md-auto">
                        <form className="d-flex  search" role="search">
                          <input
                            className="form-control me-2 input-search"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                          />
                          <button type="button" className="btn btn-danger btn-search">
                            {" "}
                            <BsSearch />
                          </button>
                        </form>
                      </div> */}

                      <div className="nav-item dropdown user ms-auto d-flex">
                        <a
                          className="nav-link"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <button type="button" className="btn btn-danger btn-search">
                            <BsPerson />
                          </button>
                        </a>
                        <ul
                          className="dropdown-menu menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link to={"/register"} className="dropdown-item">
                              Sign Up
                            </Link>
                          </li>
                          <li>
                            <Link to={"/login"} className="dropdown-item" href="#">
                              Log In
                            </Link>
                          </li>
                        </ul>

                        <LogOut/>
                      </div>

                      <div className="carrito  ms-auto d-flex">
                        {" "}
                        <Link to={"/shopping"}>
                          <button type="button" className="btn btn-danger btn-search ">
                            <AiOutlineShoppingCart />
                          </button>
                        </Link>
                      </div>
                    </div>
                    </div>
      </nav>

      {/* <nav className="navbar navbar-expand-md ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} height={50} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse");
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to={"/products"} class="nav-link text">
                    Productos
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to={"/Categorias"} className="dropdown-item" href="#">
                    <p
                      className="nav-link text"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categorias
                    </p>
                  </Link>

                  <ul
                    className="dropdown-menu menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to={"/Action"} class="nav-link text">
                        <p className="dropdown-item" href="#">
                          Action
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/Action"} class="nav-link text">
                        <p className="dropdown-item" href="#">
                          Another action
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="container md-auto">
              <form
                onSubmit={handleSearch}
                className="d-flex  search"
                role="search"
              >
                <input
                  className="form-control me-2 input-search"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  {...search}
                />
                <button className="btn btn-danger btn-search">
                  <BsSearch />
                </button>
              </form>
            </div>

            <div className="nav-item dropdown user ms-auto d-flex">
              <p
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <button type="button" className="btn btn-danger btn-search">
                  <BsPerson />
                </button>
              </p>
              <ul
                className="dropdown-menu menu"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to={"/register"} className="dropdown-item">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to={"/login"} className="dropdown-item" href="#">
                    Log In
                  </Link>
                </li>
              </ul>

              <LogOut />
            </div>

            <div className="carrito  ms-auto d-flex">
              <Link to={"/shopping"}>
                <button type="button" className="btn btn-danger btn-search ">
                  <AiOutlineShoppingCart />
                </button>
              </Link>
            </div>
          </div> */}


      <nav className="">
        <div className="container-fluid">
          <div className="container">
            <ul className="nav justify-content-end">
              <li>{!user.name ? <h5 className="text">Not Login</h5> : <h5 className="text">Hola {user.name}!</h5>}</li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
