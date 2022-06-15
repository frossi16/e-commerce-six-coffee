import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminProducts = () => {
    const user = useSelector(state=>state.userLogin)
  
    return user.admin?(
      <div>AdminProducts</div>
    )
    : <Navigate to ="/404" />
}

export default AdminProducts