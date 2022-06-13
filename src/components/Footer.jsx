import React from 'react'
import { GrFacebook } from 'react-icons/gr'
import { ImTwitter } from 'react-icons/im'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoYoutube } from 'react-icons/io'
//import logo from '../assets/Logo.png'
import '../sass/footer.scss'



const Footer = () => {



    return (
        <footer>
            <div className='container-footer'>
                <div className='box-footer'>
                    <div className='logo'>
                        Acá va el logo
                    </div>
                </div>

                <div className='box-footer'>
                    <h5>Intitucional</h5>
                    
                    <p > Quiénes somos</p>
                    <a >Cómo comprar</a>
                    <a >Información de envios</a>
                    <a >Factura A</a>
                    <a >Venta mayorista</a>
                </div>


                {/* Pongo los mismos links  */}
                <div className='box-footer'>
                    <h5>Cliente</h5>
                    <a >Mi cuenta</a>
                    <a >Mis favoritos</a>
                    <a >Acceso a clientes</a>
                    <a >Registrarse</a>
                </div>

                <div className='box-footer'>
                    <h5>Servicios</h5>
                    <a>0800-543-CAFE(3222)</a>
                    <a>Cóntactanos</a>
                </div>
                <div className='box-footer'>
                    <h5>Redes sociales</h5>
                    <a ><GrFacebook className='rrss' />  Facebook</a>
                    <a ><ImTwitter className='rrss' />  Twitter</a>
                    <a ><FaInstagramSquare className='rrss' />  Instagram</a>
                    <a ><BsLinkedin className='rrss' />  Linkedin</a>
                    <a ><IoLogoYoutube className='rrss' />  Youtube</a>
                </div>

            </div>

            <div className='box-copyright'>
                <hr />
                <p> <b>Six-Coffee</b> © 2022 - Todos los derechos reservados  </p>
            </div>

        </footer >
    )
}

export default Footer;