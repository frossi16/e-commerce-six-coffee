import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'

const CarritoProductName = ({ items }) => {

    return (
        <div>
            <div className='row container-col'>
                <div className="col-4 container-col">
                    <div className="col-2 container-col">
                        <span>Imagen</span>
                    </div>

                    <div className="box">

                        <span>{items.nameProducto}</span>
                    </div>
                </div>
                <div className="col-3 container-col-">
                    <div className="box">

                        <BsCurrencyDollar />{items.price}
                    </div>
                </div>
                <div className="col-3 container-col">
                    <div className="box">

                        {/*  <input type="number" name="tentacles" className='cantidad'
              min="0" max="20" /> */}{items.cant}
                        {/* <button type="button" className="btn btn-danger btn-search trash" > <RiDeleteBin6Line className='trash' /> </button> */}
                    </div>
                </div>
                <div className="col container-col">
                    <div className="box">

                        <BsCurrencyDollar />{items.cant * items.price}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarritoProductName;