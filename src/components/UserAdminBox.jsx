import React from 'react'
import { deleteUser } from '../state/userDB';
import ButtonAdmin from './ButtonAdmin';
import { useDispatch } from 'react-redux';



const UserAdminBox = ({user,id}) => {

  const valor = user.admin?"SI":"NO"
  const dispatch = useDispatch();

  const handleDelete = ()=> {
    dispatch(deleteUser(user))
  }
  return user._id !== id ? 
   (
    <div className='d-flex justify-content-between .bg-white border w-50 py-2 mx-5 '>
        <div className='col-4 px-4'>{user.name.toUpperCase()} {user.lastName.toUpperCase()}</div>
        <div className='col-1'>{valor} </div>
        <div className='col-7'>
          <div className='row'>
          <div className='col-6 px-4'>
            <button onClick ={handleDelete} className=' mr-5  btn btn-danger  '>Eliminar Usuario</button>

            </div>
            <div className='col-6'>
            <ButtonAdmin valor = {valor} user = {user}/>
            </div>
 
          </div>

        </div>


    </div>
  ) : null;
}

export default UserAdminBox