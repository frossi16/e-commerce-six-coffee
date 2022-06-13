import React from 'react'
import { GrFacebook } from 'react-icons/gr'
import { ImTwitter } from 'react-icons/im'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoYoutube } from 'react-icons/io'
import logo from '../assets/Logo.png'
import '../sass/footer.scss'



const Footer = () => {



    return (
        <footer>
            <div class='container-footer'>
                <div class='box-footer'>
                    <div class='logo'>
                        Acá va el logo
                    </div>
                </div>

                <div class='box-footer'>
                    <h5>Intitucional</h5>
                    <a href='#'> Quiénes somos</a>
                    <a href='#'>Cómo comprar</a>
                    <a href='#'>Información de envios</a>
                    <a href='#'>Factura A</a>
                    <a href='#'>Venta mayorista</a>
                </div>


                {/* Pongo los mismos links  */}
                <div class='box-footer'>
                    <h5>Cliente</h5>
                    <a href='#'>Mi cuenta</a>
                    <a href='#'>Mis favoritos</a>
                    <a href='#'>Acceso a clientes</a>
                    <a href='#'>Registrarse</a>
                </div>

                <div class='box-footer'>
                    <h5>Servicios</h5>
                    <a href='#'>0800-543-CAFE(3222)</a>
                    <a href='#'>Cóntactanos</a>
                </div>

                <div class='box-footer'>
                    <h5>Redes sociales</h5>
                    <a href='#'><GrFacebook class='rrss' />  Facebook</a>
                    <a href='#'><ImTwitter class='rrss' />  Twitter</a>
                    <a href='#'><FaInstagramSquare class='rrss' />  Instagram</a>
                    <a href='#'><BsLinkedin class='rrss' />  Linkedin</a>
                    <a href='#'><IoLogoYoutube class='rrss' />  Youtube</a>
                </div>

            </div>

            <div class='box-copyright'>
                <hr />
                <p> <b>Six-Coffee</b> © 2022 - Todos los derechos reservados  </p>
            </div>

        </footer >
    )
}

export default Footer;