import React from 'react'
import axios from 'axios'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'

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
        <div className='fondo'>
            <form className="form" onSubmit={handlerSubmit}>
                <h1 className='text-danger' font-weight='bold'>Sing up </h1>
                <div className="mb-3">
                    <input className="form-control input" placeholder='First name'{...name} />
                </div>
                <div className="mb-3">

                    <input class="form-control input" placeholder='Last Name' {...lastName} />
                </div>
                <div className="mb-3">

                    <input type="email" className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@email.com' {...email} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control input" id="exampleInputPassword1" placeholder='Password' {...password} />
                </div>
                <button type="submit" className="btn btn-danger input btn-form btn-register">Sing Up</button>
            </form>
        </div>
    );
}

export default NewUser;
