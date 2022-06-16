import React, {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { getAllProductRequest } from '../state/productos';
import { addProduct } from '../state/productos';
import Single from '../commons/Single';
import { getCategories } from '../state/categories';


const AdminProducts = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const categories = useSelector(state=>state.categories)
  const products = useSelector(state=>state.productos)
  const dispatch = useDispatch();
  const title = useInput("")
  const price = useInput(0)
  const stock = useInput(0)
  const image = useInput("")
  const description = useInput("")
  const [category,setCategory] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addProduct({title:title.value,price:price.value,image:image.value,stock:stock.value,description:description.value,category:category}))
  }

  useEffect(()=>{
    dispatch(getAllProductRequest())
    dispatch(getCategories())

  },[])

  return user && user.admin?(
    <div className='row grilla2 p-5 m-0'>
      <h2 className='mb-3'><strong>Administrar Productos</strong></h2>
      <div className='col-6'>
      <h2 className='pb-3'>Crear Nuevo</h2>
      <form className="form border" onSubmit={handleSubmit}>
                <label class="pt-3 px-3">
                    Nombre:
                    <input {...title} type="text" class="form-control input my-3" />
                </label>
                <label class="pt-3 px-3">
                    Precio:
                    <input {...price} type="number" class="form-control input my-3" />
                </label>
                <label class="pt-3 px-3">
                    Imágen:
                    <input {...image} type="text" class="form-control input my-3" placeholder='Dirección de imágen' />
                </label>
                <label class="pt-3 px-3">
                    Stock:
                    <input {...stock} type="number" class="form-control input my-3" />
                </label>
                <label class="pt-3 px-3">
                    Descripción:
                    <input {...description} type="text" class="form-control input my-3" />
                </label>
                <label class="pt-3 px-3">
                    Categoría:
                    
                    <select className = "mx-4" onChange={(e) => {setCategory(e.target.value);}}>
                      <option></option>
                          {
                            categories.map((category)=>{
                              return <option>{category.categoryName}</option>
                            })
                          }

                    </select>
                </label>
                <div className='d-flex my-3 justify-content-center'>
                <button  disabled={!title || !price || !stock || !image || !description || !category} type="submit" class="btn btn-sm btn-danger btn-register">Agregar Producto</button>

                </div>
          
      </form>

     

      </div>
      <div className='col-6'>
      <h2 className='pb-3'>Productos</h2>
      <div className='row'>
      {
        products.map((category)=>{
          return <Single key = {category._id} element={category} type = {"products"}/>
        })
      }
      </div>


      </div>


    </div>
  )
  : 
  <Navigate to ="/404" />
}


export default AdminProducts