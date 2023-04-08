import React from 'react'
import { useMediaQuery } from 'react-responsive'

  // import Swiper JS
  import { Swiper, SwiperSlide } from "swiper/react";

  // import Swiper styles
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation } from "swiper";


import "./styles/homeHero.css"

// Import Images
import minusImage from "../../../../../Assets/img/minus.svg"
import brotherLogo from "../../../../../Assets/img/logo.svg"
import arrowTopRight from "../../../../../Assets/img/white-arrow2.svg"
import asterisk from "../../../../../Assets/img/magenta-asterisk.svg"
import hex from "../../../../../Assets/img/yellow-hex.svg"
import trap from "../../../../../Assets/img/green-trap.svg"
import barDots from "../../../../../Assets/img/dots.svg"
import arrowTransparent from "../../../../../Assets/img/white-arrow.svg"
import ellipse from "../../../../../Assets/img/magenta-circle.svg"
import simpleArrow from "../../../../../Assets/img/white-arrow-down.svg"
import hexFull from "../../../../../Assets/img/yellow-hex-full.svg"



export default function HomeHero(props) {
  const randomBackground= props.randomBackground;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })

  return (
    <div className={`home-hero-container template-${randomBackground}`}>
      <div className='home-inner-container'>
        <img className='asterisk' src={asterisk} alt='asterisk picture'/>
        <img className='small-asterisk' src={asterisk} alt='asterisk picture'/>
        <img className='ellipse' src={ellipse} alt='ellipse picture'/>
        <img className='trap' src={trap} alt='trap picture'/>
        {!isTabletOrMobile &&
        <>
        <img className='hex' src={randomBackground=="grey" ? hexFull: hex} alt='hex picture'/>
        <img className='arrow-transparent' src={arrowTransparent} alt='arrow transparent picture'/>
        </>
        }
        <div className='container-borders-background'>
          <hr className='background-border'/>
          <hr className='background-border'/>
          <hr className='background-border'/>
          <hr className='background-border'/>
        </div>
        <div className='cel-flex-contain-dir-row inner-block-text-container'>
          <div className='home-inner-col'>
            <div className='home-inner-cel cel-flex-contain-dir-row'>
              <img className='minus-logo' src={minusImage} alt='minus logo'/>
              <img className='brother-logo' src={brotherLogo} alt='brother logo'/>
            </div>
            <div className='home-inner-cel cel-flex-contain-dir-row'>
              <h1>Madrid</h1>
              <img className='arrow-top-right' src={arrowTopRight} alt='arrow icon'/>
            </div>
            <div className='home-inner-cel'>
              <div className='cel-flex-contain-dir-row'>
                  <h4>Doers School</h4>
              </div>
            </div>
          </div>

          <div className='home-inner-col'>
            <div className='home-inner-cel relative-cell'>
              <div className='static-hex-block'>
                <img className='static-hex' src={hex} alt='hex picture'/>
                <p>Ultimos<br/>lugares</p>
              </div>
            </div>
            {isTabletOrMobile ?        
            <>    
            
            <img className='bar-dots' src={barDots} alt='bar dots picture'/>     
                <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Navigation]}
                  className="hero-home-slider"
                >
                  <SwiperSlide className='box-with-hover-effect'>              
                    <h5>Curso Anual de Creatividad</h5>
                    <p>Hay plazas disponibles.<br/>Apúntate!</p>       
                  </SwiperSlide>  
                  <SwiperSlide className='box-with-hover-effect'>
                      <h5>Planificación y Estrategia Creativa</h5>
                      <p>Quedan pocas plazas.<br/>No te quedes fuera!</p> 
                  </SwiperSlide>
                </Swiper>       
                 </>       
                :
                <>
              <div className='home-inner-cel box-with-hover-effect'>
                  <h5>Curso Anual de Creatividad</h5>
                  <p>Hay plazas disponibles.<br/>Apúntate!</p>         
                  <img className='bar-dots' src={barDots} alt='bar dots picture'/>  
              </div>
              <div className='home-inner-cel box-with-hover-effect'>  
                    <h5>Planificación y Estrategia Creativa</h5>
                    <p>Quedan pocas plazas.<br/>No te quedes fuera!</p>   
              </div>
              <div className='box-transition-container'>
                <div className='text-transition-box'>
                  <p className='text-transition'>  // Ver todos los cursos  </p>
                  <p className='text-transition'>  // Ver todos los cursos  </p>
                  <p className='text-transition'>  // Ver todos los cursos  </p>
                  <p className='text-transition'>  // Ver todos los cursos  </p>
                  <p className='text-transition'>  // Ver todos los cursos  </p>
                </div>                
              </div>
            </>
                }

          </div>
        </div>
        <img className='simple-arrow' src={simpleArrow} alt='simple arrow picture'/>

      </div>      
    </div>
  )
}
