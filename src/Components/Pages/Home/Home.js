import React from 'react'
import HomeHero from './Seccions/HomeHero/HomeHero'
import AboutBrothers from './Seccions/AboutBrothers/AboutBrothers'
import News from './Seccions/News/News'
import ContactUs from './Seccions/ContactUs/ContactUs'

export default function Home(props) {
  const randomBackground= props.randomBackground
  return (
    <>
    <HomeHero randomBackground={randomBackground}/>
    <AboutBrothers/>
    <News/>
    <ContactUs/>
    </>
  )
}
