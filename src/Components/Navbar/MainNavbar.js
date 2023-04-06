import React, {useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

//Import boostrap Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

//Import boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';


//Imagenes y logos
import imagenIso from "../../Assets/img/iso.svg"
import logoSvg from "../../Assets/img/logo.svg"
import InstagramLogo from "../../Assets/img/instagram.svg"
import ImailLogo from "../../Assets/img/email.svg"
import WebSiteLogo from "../../Assets/img/globe.svg"
import WhatsAppLogo from "../../Assets/img/whatsapp.svg"

//import Navbar Styles
import "./styles/mainNavbar.css"

export default function MainNavbar(props) {
  const randomBackground = props.randomBackground;

  const [isSticky, setIsSticky] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })

  
  useEffect(() => {
    const handleScroll = () => {
      if( window.scrollY > 10){
        setIsSticky(true);        
      }
      else setIsSticky(false)
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  return (
       <Navbar expand={"lg"} sticky={isSticky && "top"} className={`navbar-template-${randomBackground}`}>
          <Container>
            <Navbar.Brand className='logo-seccion'> 
              <img className={!isSticky ? 'rotate-image image-iso' : "image-logo" } src={isSticky ? logoSvg : imagenIso}/>
            </Navbar.Brand>
            {isTabletOrMobile && 
            <div className='whatsapp-box'>
              <img alt='logo-whatsApp' src={WhatsAppLogo}/>
              <span>915 76 68 76</span>
            </div>
            }
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />            
            <Navbar.Offcanvas placement="top"  >
              <Offcanvas.Header closeButton>
              <img className={!isSticky ? 'rotate-image image-iso' : "image-logo" } src={isSticky ? logoSvg : imagenIso}/>
              {isTabletOrMobile && 
              <div className='whatsapp-box'>
                <img alt='logo-whatsApp' src={WhatsAppLogo}/>
                <span>915 76 68 76</span>
              </div>
            }
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="nav-items justify-content-end flex-grow-1 pe-3">
                    <Link to="/">Cursos</Link>
                    <Link to="/">Quienés somos</Link>
                    <Link to="/">Noticias frescas</Link>
                    <Link to="/">#Wearedoers</Link>
                    <Link to="/">Contacto</Link>
                </Nav>
                {isTabletOrMobile && 
                  <div className='text-offcanvas-mobile'>
                    <h5>Ven a conocernos</h5>
                    <span>Calle de las Huertas 48,<br/> 28014, Madrid <br/> +34 910 52 66 49 | +34 612 27 84 09 <br/> madrid@brotherad.com</span>
                  </div>
                  }
                <div className='social-nav-items'>
                  <a href="mailto:challenge@gmail.com">
                      <img className='rotate-image' src={ImailLogo} alt="logo-mail"/>
                  </a>
                  <a href='https://www.instagram.com/challenge'>
                      <img src={InstagramLogo} alt="logo-instagram"/>
                  </a>
                  <a href='https://www.challenge.com/'>
                      <img src={WebSiteLogo} alt="logo-website"/>
                  </a>
               </div>
               {isTabletOrMobile && 
                  <div className='footer-offcanvas-mobile'>
                    <img src={WebSiteLogo} alt="logo-website"/>
                    <p>Worldwide</p>
                    <img src={WebSiteLogo} alt="logo-website"/>
                  </div>
                  }
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}
