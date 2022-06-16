import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

const CarritoProductName = ({ items }) => {

    return (
        <div>
            <div className='row container-col'>
                <div className="col-4 container-col">
                    <div className="box">
                        <span><img src={items.img} height={50} width={50} /></span>
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

                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-danger"><BiMinus /></button>
                            <button type="number" className="btn">{items.cant}</button>
                            <button type="button" className="btn btn-danger"><BsPlus /></button>
                            <button type="button" className="btn btn-danger"><RiDeleteBin6Line /></button>
                        </div>
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