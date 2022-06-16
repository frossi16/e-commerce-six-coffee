import React, { useEffect } from 'react'
import axios from 'axios'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CarritoProductName from './CarritoProductName'
import { getCart } from '../state/cart'



const Shopping = () => {

    /* Sabri: Reorganizar vista para poder realizar un map */
    /* Agregar botón de finalizar compra */
    /* Termianr de dar estilo */
    /* Hacer que si el carrito está vacio permita ir al home */

    const dispatch = useDispatch()
    const carrito = useSelector(state => state.cart)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        dispatch(getCart(user._id))
    }, [])
    console.log('CARRITO SHOPPING', carrito) ///al recargar se borra el carrito

    /* res.data[0].nameProducto */
    /* res.data[0].price */
    /* res.data[0].cant */
    /* res.data[0].cant * res.data[0].price = subtotal*/

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
                            {/*  <input type="number" name="tentacles" className='cantidad'
              min="0" max="20" /> */}
                            {/* <button type="button" className="btn btn-danger btn-search trash" > <RiDeleteBin6Line className='trash' /> </button> */}
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
                        <h3>TOTAL</h3>
                        <BsCurrencyDollar />...
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