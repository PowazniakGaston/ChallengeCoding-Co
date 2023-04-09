import React,{useState} from 'react'
import "./styles/aboutBrothers.css"

// Import Backgrounds Images
import trap from "../../../../../Assets/img/green-trap.svg"
import cloud from "../../../../../Assets/img/magenta-cloud.svg"
import hexFull from "../../../../../Assets/img/yellow-hex-full.svg"
import asterisk from "../../../../../Assets/img/magenta-asterisk.svg"

// import workshops images
import thumb1 from "../../../../../Assets/img/thumb-01.jpg"
import thumb2 from "../../../../../Assets/img/thumb-02.jpg"
import thumb3 from "../../../../../Assets/img/thumb-03.jpg"
import thumb4 from "../../../../../Assets/img/thumb-04.jpg"
import thumb5 from "../../../../../Assets/img/thumb-05.jpg"
import thumb6 from "../../../../../Assets/img/thumb-06.jpg"

// import icons
import arrowBlack from "../../../../../Assets/img/right-arrow-black.svg"
import yellowArrow from "../../../../../Assets/img/yellow-arrows.svg"
import yellowBear from "../../../../../Assets/img/yellow-bear.svg"

// import Utilities Transition text
import TransitionText from '../../../../Utilities/TransitionText/TransitionText'

export default function AboutBrothers() {
    const workshopsData = [
    {
        image:thumb1,
        info: "Curso Anual de creatividad"
    },
    {
        image:thumb2,
        info: "Planificación y Estrategia Creativa 2021"
    },
    {
        image:thumb3,
        info: "PR & Comunicación"
    },
    {
        image:thumb4,
        info: "Digital y Social Media"
    },
    {
        image:thumb5,
        info: "Design Thinking"
    },
    {
        image:thumb6,
        info: "Planificación y Estrategia Creativa"
    },
    {
        image:thumb1,
        info: "Curso Anual de creatividad"
    },
    {
        image:thumb2,
        info: "Planificación y Estrategia Creativa 2021"
    },
    {
        image:thumb3,
        info: "PR & Comunicación"
    },
    {
        image:thumb4,
        info: "Digital y Social Media"
    },
    {
        image:thumb5,
        info: "Design Thinking"
    },
    {
        image:thumb6,
        info: "Planificación y Estrategia Creativa"
    },
]

const [scrollPosition, setScrollPosition] = useState(0);

function handleScrollUp() {
  // Actualiza el estado para mover el scroll hacia arriba
  if(scrollPosition>=0 && scrollPosition<500){
    setScrollPosition(scrollPosition + 100); // Resta 100px a la posición actual del scroll
  }
}

function handleScrollDown() {
  // Actualiza el estado para mover el scroll hacia abajo
  if(scrollPosition>0){
  setScrollPosition(scrollPosition - 100); // Resta 100px a la posición actual del scroll
}
}


  return (
    <div className='about-brothers-container'>
        <img className='trap' src={trap} alt='trap picture'/>
        <img className='cloud' src={cloud} alt='cloud picture'/>
        <div className='about-inner-container'>            
            <div className='about-col col-left'>
                <p className='col-left-title'>Mucho más <br/> que una escuela de <br/><b><span>creativos</span></b></p> 
                <p className='col-left-description'>
                Un Brother es alguien que <span>piensa continuamente</span>, inquieto, <b>curioso</b> y reflexivo.<br/><br/>
                Que se <span>plantea preguntas</span>  y busca las respuestas. Un Brother es alguien que se abre camino, proactivo, que tiene iniciativas, que <b>busca oportunidades.</b> <br/><br/>
                Un Brother no deja que las cosas pasen. Va a buscarlas y las pelea y que si gana, sigue a por más.<br/><br/>
                Y si pierde, <b>no se rinde <span>jamás.</span></b> 
                </p>
            </div>
            <div className='about-col col-right'>                
                <img className='hex-full' src={hexFull} alt='hexFull picture'/>
                <img className='asterisk' src={asterisk} alt='asterisk picture'/>                
                <h4>Cursos & Workshops</h4>
                <div className='workshop-box-container' >
                    <div className='workshop-inner-container' style={{transform:`translateY(-${scrollPosition}px)`}}>
                        {workshopsData.map((item, index) => (                     
                        <div className='workshopp-box-image'>
                            <img key={index} src={item.image} alt={`Imagen ${index}`} />
                            <p>{item.info}</p>
                        </div>
                        )
                        )}
                    </div>                    
                <div className="scroll-buttons-section">
                    <div className='button-box'>                 
                        <img className='arrow-scroll-up'  src={arrowBlack} alt="arrow icon"/>
                        <button className='scroll-button' onClick={handleScrollDown}></button>     
                    </div>
                    <div className='button-box'>
                        <img className='arrow-scroll-down' src={arrowBlack} alt="arrow icon"/>                        
                        <button className='scroll-button' onClick={handleScrollUp}></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <TransitionText imageOne={yellowArrow} imageTwo={yellowBear} textTransition={"Chequea todos los cursos"}/>
    </div>
  )
}
