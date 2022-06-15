import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminCategories = () => {
  const user = useSelector(state=>state.userLogin)

  return user.admin?(
    <div>AdminCategories</div>
  )
  : <Navigate to ="/404" />
}

export default AdminCategories