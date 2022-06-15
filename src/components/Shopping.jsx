import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsCurrencyDollar } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Shopping = () => {

    /* Sabri: Reorganizar vista para poder realizar un map */
    /* Agregar botón de finalizar compra */
    /* Termianr de dar estilo */
    /* Hacer que si el carrito está vacio permita ir al home */
    return (
        <div class="text-bg-light p-3">
            <div className='row container-col'>
                <h1 class='text-dark'>Carrito</h1>

                <div className="col-4 container-col">
                    <div className="box">
                        <h3>Producto</h3>
                        <p>Nombre del producto</p>
                    </div>
                </div>

                <div className="col-3 container-col-">
                    <div className="box">
                        <h3>Precio</h3>
                        <BsCurrencyDollar />...
                    </div>
                </div>

                <div className="col-3 container-col">
                    <div className="box">
                        <h3>Cantidad</h3>
                        <input type="number" name="tentacles" className='cantidad'
                            min="0" max="20" />
                        <button type="button" className="btn btn-danger btn-search trash" > <RiDeleteBin6Line className='trash' /> </button>
                    </div>
                </div>

                <div className="col container-col">
                    <div className="box">
                        <h3>Subtotal</h3>
                        <BsCurrencyDollar />...

                    </div>
                </div>
            </div>

            <div className='row container-col'>
                <div className="col container-col">
                    <div className="box">
                        <hr />
                        <h3>Total</h3>
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