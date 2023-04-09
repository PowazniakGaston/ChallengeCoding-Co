import React from 'react'
import { useMediaQuery } from 'react-responsive'

// import news images
import news1 from "../../../../../Assets/img/news-01.jpg"
import news2 from "../../../../../Assets/img/news-02.jpg"
import news3 from "../../../../../Assets/img/news-03.jpg"
import news4 from "../../../../../Assets/img/news-04.jpg"
import news5 from "../../../../../Assets/img/news-05.jpg"
import news6 from "../../../../../Assets/img/news-06.jpg"
import news7 from "../../../../../Assets/img/news-07.jpg"
import news8 from "../../../../../Assets/img/news-08.jpg"

//import simple arrow
import simpleArrow from "../../../../../Assets/img/white-arrow-down.svg"

//import styles
import "./stles/news.css"
import TransitionText from '../../../../Utilities/TransitionText/TransitionText'

// import icons
import whiteSmile from "../../../../../Assets/img/white-smile.svg"
import whiteArrows from "../../../../../Assets/img/white-arrows.svg"

// Import Backgrounds Images
import magentaCircle from "../../../../../Assets/img/magenta-circle2.svg"
import cloud from "../../../../../Assets/img/magenta-cloud.svg"
import asterisk from "../../../../../Assets/img/magenta-asterisk.svg"
import ellipse from "../../../../../Assets/img/magenta-circle.svg"

export default function News() {
    const newsData = [
        {
            image:news1,
            info: "Chin chin por nuestra plata en el #hackforgood del cdec"
        },        
        {
            image:news6,
            info: "Chin chin por nuestra plata en el #hackforgood del cdec"
        },
        {
            image:news2,
            info: "Dos alumnas de Brother crean la primera manifestación feminista en Twich"
        },
        {
            image:news5,
            info: "#PROHIBIDOFIJARCARTELES: UNA NUEVA OPORTUNIDAD PARA EL CARTEL MÁS FEO DEL MUNDO"
        },
        {
            image:news3,
            info: "Brother presenta <Pinta y Colorea>: el ciclo con el mejor talento gráfico en Madrid"
        },
        {
            image:news7,
            info: "Somos la escuela con más finalistas en el Festival CDEC (otra vez ;)) "
        },

        {
            image:news4,
            info: "Las nuevas ideas llegan a correos gracias a los alumnos de Brother"
        },
        {
            image:news8,
            info: "Nueva representación del kingdom a cargo del ilustrador asis percalesPlanificación y Estrategia Creativa 2021"
        },
 
    ]

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })

  return (
    <div className='news-container'>
        <img className='cloud' src={cloud} alt='cloud picture'/>
        <img className='asterisk' src={asterisk} alt='asterisk picture'/>
        {!isTabletOrMobile &&
        <img className='magenta-circle' src={magentaCircle} alt='magenta circle picture'/> }
        <img className='grey-cloud' src={cloud} alt='cloud picture'/>
        <img className='ellipse' src={ellipse} alt='ellipse picture'/>
        
        {isTabletOrMobile &&
        <>
        <img className='cloud-copy' src={cloud} alt='cloud picture'/>
        <img className='grey-cloud-copy' src={cloud} alt='cloud picture'/>
        <img className='asterisk-copy' src={asterisk} alt='asterisk picture'/> 
        <img className='ellipse-copy' src={ellipse} alt='ellipse picture'/>

        </>}
        
        
        <div className='news-inner-container'>
            <h4>Noticias Frescas</h4>
            <div className='news-images-container'>
                {(isTabletOrMobile ? newsData.slice(0, 4) : newsData).map((item, index) => (
                        <div className='news-box-image'>
                            <img key={index} src={item.image} alt={`Imagen ${index}`} />
                            <p className='news-title'>{item.info}</p>
                            <div className='news-date'>
                                <p>Publicado 04/04/2020</p>
                                <p>·</p>
                                <div className='read-more'>
                                    <p>Leer más</p>                                    
                                    <img className='arrow' src={simpleArrow} alt='simple arrow picture'/>
                                </div>
                            </div>
                        </div>
                        )
                        )}
            </div>
        </div>
        <TransitionText imageOne={whiteSmile} imageTwo={whiteArrows} textTransition={"Revisá todas las noticias"}/>
    </div>
  )
}
