import React from 'react'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { sendLoginRequest } from "../state/userLogin";



function NewUser() {
    const password = useInput()
    const email = useInput()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(sendLoginRequest({ email, password })); //guarda el usuario logeado
        navigate("/");
    };

    return (
        <>
            <form className="form" onSubmit={handlerSubmit}>
                <h1 className='text-danger' font-weight='bold'>Log in</h1>
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
