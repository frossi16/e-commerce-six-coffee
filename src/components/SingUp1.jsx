/* Sabri: HIce una copia para poder dar estilo al formulario y probar el axios*/
/* En el archivo Sigup está fallando el registro por las validaciones */

import React from 'react'
import axios from 'axios'
import useInput from '../commons/useInput'
import { useNavigate } from 'react-router-dom'
import '../sass/forms.scss'


function NewUser() {

    const name = useInput()
    const lastName = useInput()
    const password = useInput()
    const email = useInput()
    const navigate = useNavigate()

    const handlerSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3030/user/register', ({ name: name.value, lastName: lastName.value, password: password.value, email: email.value }))
            .then((res) => res.data)
            .then(() => navigate('/login'))
            .catch(error => console.log(error))
    }

    return (
        <div class='fondo'>
            <form className="form" onSubmit={handlerSubmit}>
                <h1 class='text-danger' font-weight='bold'>Sing up </h1>
                <div class="mb-3">
                    <input class="form-control input" placeholder='First name'{...name} />
                </div>
                <div class="mb-3">

                    <input class="form-control input" placeholder='Last Name' {...lastName} />
                </div>
                <div class="mb-3">

                    <input type="email" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@email.com' {...email} />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control input" id="exampleInputPassword1" placeholder='Password' {...password} />
                </div>
                <button type="submit" class="btn btn-danger input btn-form btn-register">Sing Up</button>
            </form>
        </div>
    );
}

export default NewUser;
