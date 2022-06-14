import React, { useState } from 'react'
import axios from 'axios'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
// import '../sass/forms.scss'
/* Sabri: HIce una copia para poder dar estilo al formulario y probar el axios*/
/* En el archivo Sigup está fallando el registro por las validaciones */
import { useDispatch } from "react-redux";
import { sendLoginRequest } from "../state/userLogin";
import { getAllUserRequest } from "../state/userDB";
import { getAllProductRequest } from "../state/productos";
import { getAllVentasRequest } from "../state/ventas";



function NewUser() {
    const password = useInput()
    const email = useInput()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault();
    
        dispatch(sendLoginRequest({ email, password })); //guarda el usuario logeado
    
        // dispatch(getAllUserRequest()); // Trae todos los usuarios
        // dispatch( getAllProductRequest()) // Trae todos los usuarios
        // dispatch( getAllVentasRequest()) // Trae todos los usuarios
    
        navigate("/");
      };

    // const handlerSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:3030/user/login', ({ email: email.value, password: password.value }))
    //         .then((data) => {
    //             console.log(data.data._id)
    //             console.log(data.data.name)

    //             localStorage.setItem('user', JSON.stringify(data.data._id))
    //             localStorage.setItem('name', JSON.stringify(data.data.name))

    //         })
    //         .then(() => navigate('/'))
    //         .catch(error => console.log(error))
    // }




    return (
        <>
            <form className="form" onSubmit={handlerSubmit}>
                <h1 class='text-dark'>Log in</h1>
                <div class="mb-3">
                    <input type="email" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@email.com' {...email} />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control input" id="exampleInputPassword1" placeholder='Password' {...password} />
                </div>
                <button type="submit" class="btn btn-danger input btn-form btn-register">Log In</button>
            </form>
        </>
    );
}

export default NewUser;
