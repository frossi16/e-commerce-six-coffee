import React from 'react'
import { GrFacebook } from 'react-icons/gr'
import { ImTwitter } from 'react-icons/im'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoYoutube } from 'react-icons/io'
import { Link } from 'react-router-dom'



import logo from '../assets/Logo.png'


const Footer = () => {



    return (
        <footer>
            <div className='container-footer'>

                <div className='box-footer'>
                    <h5>Intitucional</h5>

                    <a href='https://www.cafemartinez.com/quienes-somos/' target='_blank'> Quiénes somos</a>
                    <a href='https://www.cafemartinez.com/como-comprar/' target='_blank'>Cómo comprar</a>
                    <a href='https://www.cafemartinez.com/informacion-envios/' target='_blank'>Información de envios</a>
                </div>

                <div className='box-footer'>
                    <h5>Cliente</h5>
                    <Link to={'/login'}>Mi cuenta</Link>
                    <Link to={'/register'}>Registrarse</Link>
                </div>

                <div className='box-footer'>
                    <h5>Servicios</h5>
                    <a>0800-543-CAFE(3222)</a>
                </div>
                <div className='box-footer'>
                    <h5>Redes sociales</h5>
                    <a href='https://www.facebook.com/PlataformaCinco/' target="_blank"><GrFacebook className='rrss' />  Facebook</a>
                    <a href='https://twitter.com/plataforma5la' target="_blank"><ImTwitter className='rrss' />  Twitter</a>
                    <a href='https://www.instagram.com/plataforma5/' target="_blank"><FaInstagramSquare className='rrss' />  Instagram</a>
                    <a href='https://www.linkedin.com/school/plataforma5/?originalSubdomain=ar' target="_blank"><BsLinkedin className='rrss' />  Linkedin</a>
                    <a href='https://www.youtube.com/channel/UC5WnsQ1APuLsgY0mOalzr-w' target="_blank"><IoLogoYoutube className='rrss' />  Youtube</a>
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