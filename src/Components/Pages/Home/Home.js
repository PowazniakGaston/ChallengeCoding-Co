import React from 'react'
import HomeHero from './Seccions/HomeHero/HomeHero'
import AboutBrothers from './Seccions/AboutBrothers/AboutBrothers'
import News from './Seccions/News/News'

export default function Home(props) {
  const randomBackground= props.randomBackground
  return (
    <>
    <HomeHero randomBackground={randomBackground}/>
    <AboutBrothers/>
    <News/>
    </>
  )
}
