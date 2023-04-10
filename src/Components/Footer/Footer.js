import React from 'react'
import "./styles/footer.css"
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

// import icons
import Mail from "../../Assets/img/email.svg"
import instagram from "../../Assets/img/instagram.svg"
import webSite from "../../Assets/img/globe.svg"

// import logo
import BrothersLogo from "../../Assets/img/white-logo.svg"

export default function Footer() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })
  return (
    <div className='footer-container'>
        {!isTabletOrMobile ?
        <>
        <div className='route-footer'>
            <Link to="/">Cursos</Link>
            <Link to="/">Quiénes somos</Link>
            <Link to="/">Noticias Frescas</Link>
            <Link to="/">#Wearedoers</Link>
            <Link to="/">Contacto</Link>
        </div>
        <div className='info-footer'>
            <div className='icon-footer-section'>
                <div className='icons'>
                    <img className='mail-icon rotate-image' src={Mail} alt="mail icon"/>
                    <img src={instagram} alt="instagram icon"/>
                    <img src={webSite} alt="wegSite icon"/>
                </div>
                <div className='icon-info'>
                    <span>2021</span>
                    <span>Brother Madrid</span>
                </div>
            </div>
            <div className='footer-logo-section'>
                <img src={BrothersLogo} alt='logo brothers'/>
            </div>
            <div className='footer-information'>
                <p>Calle Gran Vía 27, 28013 Madrid,<br/> +34 910 52 66 49 | +34 612 27 84 09 <br/>madrid@brotherad.com</p>
                <p>Made by <b>20DEDOS</b></p>
            </div>
        </div>
        </>        
        :
        <div className='mobile-footer'>
            <div className='footer-logo-section'>
                <img src={BrothersLogo} alt='logo brothers'/>
            </div>
            <div className='route-footer'>
                    <Link to="/">Cursos</Link>
                    <Link to="/">Quiénes somos</Link>
                    <Link to="/">Noticias Frescas</Link>
                    <Link to="/">#Wearedoers</Link>
                    <Link to="/">Contacto</Link>
            </div>
            <div className='footer-information'>
                <p>Calle Gran Vía 27, 28013 Madrid,<br/> +34 910 52 66 49 | +34 612 27 84 09 <br/>madrid@brotherad.com</p>                
            </div>
            <div className='icons'>
                    <img className='mail-icon rotate-image' src={Mail} alt="mail icon"/>
                    <img src={instagram} alt="instagram icon"/>
                    <img src={webSite} alt="wegSite icon"/>
            </div>            
            <div className='footer-information'>
                <p>2021 Brother Madrid</p>    
                <p>Made by <b>20DEDOS</b></p>              
            </div>
            
        </div>
        }
    </div>
  )
}
