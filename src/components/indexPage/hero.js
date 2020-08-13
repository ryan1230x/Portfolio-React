import React from 'react'
import HeroCard from './heroCard'
import { particleParams } from '../../data/data'

import { Container } from 'react-bootstrap';
import Particles from "react-particles-js"

class Hero extends React.Component {

  styles = {    
    image: {
      position:'absolute',
      bottom: 0,
      left:0,
      right:0,
      zIndex:3,        
      width:'100%'
    }
  }

  render(){
    return (
      <div id='site-hero'>        
        <Particles params={particleParams} />              
        <Container>
          <HeroCard />
        </Container>   
        <img alt="svg" style={this.styles.image} src={require('../../landing.svg')} />               
      </div>
    )
  }

}

export default Hero;