import React from 'react'
import { useMediaQuery } from 'react-responsive'
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
        <div className='static-hex-block'>
          <img className='static-hex' src={hex} alt='hex picture'/>
          <p>Ultimos<br/>lugares</p>
        </div>
        <img className='hex' src={randomBackground=="grey" ? hexFull: hex} alt='hex picture'/>
        <img className='arrow-transparent' src={arrowTransparent} alt='arrow transparent picture'/>
        </>
        }
        <div className='row-border-top'>
          <div className='home-inner-row row-padding'>
            <div className='row-flex-contain-dir-row'>
              <img className='minus-logo' src={minusImage} alt='minus logo'/>
              <img className='brother-logo' src={brotherLogo} alt='brother logo'/>
            </div>            
            <div></div>
          </div>
        </div>
        <div className='row-border-top'>
          <div className='home-inner-row '>
            <div className='row-flex-contain-dir-row'>
              <h1>Madrid</h1>
              <img className='arrow-top-right' src={arrowTopRight} alt='arrow icon'/>
            </div>
            <div className='box-with-hover-effect'>
              <h5>Curso Anual de Creatividad</h5>
              <p>Hay plazas disponibles.<br/>Apúntate!</p>         
              <img className='bar-dots' src={barDots} alt='bar dots picture'/>  
            </div>
          </div>  
        </div>  
        <div className='row-border-top'>
          <div className='home-inner-row'>
            <div className='row-flex-contain-dir-row'>
              <h4>Doers School</h4>
            </div>
            <div className='box-with-hover-effect'>
              <h5>Planificación y Estrategia Creativa</h5>
              <p>Quedan pocas plazas.<br/>No te quedes fuera!</p>            
            </div>
            </div>  
        </div>   
        <div className='row-border-top'>
        <div className='home-inner-row'>
            <div className='row-flex-contain-dir-row'>
            </div>
            <div className='box-with-hover-effect'>         
            </div>
            </div>   
        </div>  
        <img className='simple-arrow' src={simpleArrow} alt='simple arrow picture'/>

      </div>      
    </div>
  )
}
