import React from 'react'
import { setAdmin } from '../state/userDB'
import { useDispatch } from 'react-redux'

const ButtonAdmin = ({valor,user}) => {
    const dispatch = useDispatch()

    const handleClick = (valor)=>{
        dispatch(setAdmin({userId:user._id ,valor:valor}))
     }
     {
        return valor ==="SI"?
        <button onClick ={()=>{handleClick(false)}} className=' mr-5  btn btn-danger px-4 '>Remover Admin</button>
        :
        <button onClick ={()=>{handleClick(true)}} className=' mr-5  btn btn-danger px-4'>Añadir Admin</button>

     }

}

export default ButtonAdmin