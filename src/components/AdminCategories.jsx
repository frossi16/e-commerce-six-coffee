import React, {useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Single from '../commons/Single';
import { addCategory, getCategories } from '../state/categories';
import useInput from '../hooks/useInput';

const AdminCategories = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  // const user = useSelector(state=>state.userLogin)

  const categories = useSelector(state=>state.categories)
  const category = useInput()
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addCategory({categoryName:category.value}))
  }

  useEffect(()=>{
    dispatch(getCategories())
  },[])


  return user && user.admin ? (
      <div className='row grilla2 p-5 m-0'>
      <h2 className='mb-3'><strong>Administrar Categorías</strong></h2>

      <div className='col-6'>
      <h2 className='pb-3'>Crear Nueva</h2>
      <form className="form border" onSubmit={handleSubmit}>
                <label class="pt-3 px-3">
                    Categoría
                    <input {...category} type="text" class="form-control input my-3"   placeholder='Nombre' />
                </label>
                <div className='d-flex my-3 justify-content-center'>
                <button type="submit" class="btn btn-sm btn-danger btn-register">Agregar Categoría</button>

                </div>
          
      </form>

      </div>
      <div className='col-6'>
      <h2 className='pb-3'>Categorías</h2>
      <div className='row'>
      {
        categories.map((category)=>{
          return <Single key = {category._id} element={category}/>
        })
      }
      </div>


      </div>


    </div>
  )
  :<Navigate to ="/404" />

}

export default AdminCategories