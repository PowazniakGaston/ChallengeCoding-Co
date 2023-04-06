import React from 'react'
import HomeHero from './Seccions/HomeHero/HomeHero'

export default function Home(props) {
  const randomBackground= props.randomBackground
  return (
    <HomeHero randomBackground={randomBackground}/>
  )
}
