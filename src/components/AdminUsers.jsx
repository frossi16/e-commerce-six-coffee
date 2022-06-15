import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminUsers = () => {
    const user = useSelector(state=>state.userLogin)
  
    return user.admin?(
      <div>AdminUsers</div>
    )
    : <Navigate to ="/404" />
}

export default AdminUsers