import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import medios from '../assets/mediosDePago.png'

const Shopping = () => {

    /* Sabri: Reorganizar vista para poder realizar un map */
    return (
        <div id='fondo'>
            <h1 class='text-dark'>Carrito</h1>

            <div class="row align-items-start container bg-light">
                <div class="col-6">
                    <p>Acá puede ir la imagen</p>
                </div>

                <div class="col-3">
                    <div class='container bg-light'>
                        <div>
                            Nombre producto
                        </div>

                        <div>
                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                <input type="number" name="tentacles"
                                    min="0" max="20" />
                            </div>
                        </div>
                        <div>
                            Precio unitario
                        </div>
                        <div>
                            Subtotal (p*q)
                        </div>
                        <div>
                            Total
                        </div>
                        <div>
                            <button type="button" class="btn btn-danger btn-search ">Finalizar compra <AiOutlineShoppingCart /></button>
                        </div>
                        <div>
                            <img src={medios} />
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger btn-search ">Delete  <RiDeleteBin6Line /></button>

                </div>
            </div>
        </div>
    )
}

export default Shopping;