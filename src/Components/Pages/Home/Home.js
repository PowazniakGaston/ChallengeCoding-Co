import React from 'react'
import HomeHero from './Seccions/HomeHero/HomeHero'
import AboutBrothers from './Seccions/AboutBrothers/AboutBrothers'

export default function Home(props) {
  const randomBackground= props.randomBackground
  return (
    <>
    <HomeHero randomBackground={randomBackground}/>
    <AboutBrothers/>
    </>
  )
}
