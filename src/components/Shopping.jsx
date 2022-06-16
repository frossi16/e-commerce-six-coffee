
import React, { useEffect, Navigate } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CarritoProductName from './CarritoProductName'
import { getCart } from '../state/cart'
import { deleteCart } from '../state/cart'
import { updateCart } from '../state/cart'





const Shopping = () => {



    const dispatch = useDispatch()
    const navigate = useNavigate()

    const carrito = useSelector(state => state.cart)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        dispatch(getCart(user._id))
        /* dispatch(deleteCart()) */
    }, [])
    console.log('CARRITO SHOPPING', carrito)

    /* Hago un filter de las cantidades y lo precios para calcular el total */
    let precioCant = carrito.map((items) => items.price * items.cant)
    let total = precioCant.reduce((acc, e) => acc + e, 0)

    if (!user) {
        Navigate('/')
    }



    return (
        <div class="text-bg-light p-3">
            <div>
                <h1 class='text-dark'>Carrito</h1>
                <div className='row container-col'>
                    <div className="col-4 container-col">
                        <div className="box">
                            <h4>Producto</h4>
                        </div>
                    </div>
                    <div className="col-3 container-col-">
                        <div className="box">
                            <h4>Precio</h4>
                        </div>
                    </div>
                    <div className="col-3 container-col">
                        <div className="box">
                            <h4>Cantidad</h4>
                        </div>
                    </div>
                    <div className="col container-col">
                        <div className="box">
                            <h4>Subtotal</h4>
                        </div>
                    </div>
                </div>

                <div>
                    {
                        carrito.map((items, i) => {
                            return (
                                <div key={i}>
                                    <CarritoProductName items={items} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='row container-col'>
                <div className="col container-col">
                    <div className="box">
                        <hr />
                        <h3>TOTAL
                            <BsCurrencyDollar />{total}</h3>
                    </div>
                </div>
            </div>

            <div className='row container-col'>
                <div className="col container-col">
                    <div className="box">
                        {/* Redirige al usuario si termino la compra con éxito */}
                        <Link to={'/finish'}>
                            <button type="button" class="btn btn-danger btn-search ">Finalizar compra <AiOutlineShoppingCart /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Shopping;