import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'

const HeroCard = () => {
  return (
    <div id="site-hero-card">
      <Container>
        <h1 className="font-weight-bold">Ryan Harper</h1>
        <h5 className="font-weight-bold mb-4">
          Full Stack Web Developer
        </h5>           
        <Link to="/projects" className="btn-lg btn btn-primary">See Projects</Link>
        <Link to="/contact" className="btn-lg btn btn-secondary d-none d-md-inline-block ml-2">Contact Me</Link>            
      </Container>
    </div>
  )
}

export default HeroCard;
