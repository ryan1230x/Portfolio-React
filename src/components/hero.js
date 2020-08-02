import React from 'react'
import HeroCard from './heroCard'
import { Container } from 'react-bootstrap';

const Hero = () => {

  return (
    <div id='site-hero'>
      <Container>
        <HeroCard />
      </Container>   
      <img alt="svg" style={{
        position:'absolute',
        bottom: 0,
        left:0,
        right:0,
        zIndex:3,        
        width:'100%'
      }} src={require('../landing.svg')} />               
    </div>
  )
}

export default Hero;