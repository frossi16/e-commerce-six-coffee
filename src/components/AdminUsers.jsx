import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAllUserRequest } from '../state/userDB';
import UserAdminBox from './UserAdminBox';

const AdminUsers = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const allUsers =  useSelector(state=>state.userDB)
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getAllUserRequest())
    },[])

    return user && user.admin ? (
        <div className='userAdminFather d-flex flex-column align-content-center pb-5'>
            < h2 className='mt-3 mb-4 mx-5'><strong>Administrar Usuarios</strong></h2>
            <div className='row mx-5 my-3'>
                <div className='col-2'>Nombre</div>
                <div className='col-1'>Admin</div>


            </div>
            <div className='d-flex flex-column ¡'>
            {   
                allUsers.map((singleUser)=>{
                    return <UserAdminBox user={singleUser} id = {user._id}/>
                })
            }
            </div>
        </div>
    )
    : <Navigate to ="/404" />
}

export default AdminUsers