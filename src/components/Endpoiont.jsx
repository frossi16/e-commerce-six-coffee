import React from 'react'
import { Link } from 'react-router-dom'

const Endpoint = () => {

    return (
        <div>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Haz finalizado tu compra con éxito</h5>
                    <p class="card-text">¡Muchas gracias por comprar en <striong className='text-danger'>Six-Coffee</striong></p>
                    <Link to={'/'}> <button type="button" className="btn btn-danger btn-search" >Home</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Endpoint;