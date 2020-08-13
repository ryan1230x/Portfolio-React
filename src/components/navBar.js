import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Container } from "react-bootstrap"

class CustomNavbar extends React.Component {

  render() {
    return(
      <>
     <Navbar expand="lg" id="site-navbar">
       <Container>
       <Link to="/" className="link-no-style">
         <Navbar.Brand as="span" 
          style={{ 
            fontSize:'2.2rem',
            fontWeight:'bold',            
            paddingRight: '5px',                        
           }}
           >
            Ryan
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto font-weight-bold">

            <Link to="/" className="link-no-style">
              <Nav.Link as="span" eventKey="index">
                Home
              </Nav.Link>
            </Link>
            <Link to="/about" className="link-no-style">
              <Nav.Link as="span" eventKey="about">
                About
              </Nav.Link>
            </Link>
            <Link to="/projects" className="link-no-style">
              <Nav.Link as="span" eventKey="projects">
                Projects
              </Nav.Link>
            </Link>
            <Link to="/contact" className="link-no-style">
              <Nav.Link as="span" eventKey="contact">
                Contact
              </Nav.Link>
            </Link>
          </Nav>          
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
  }
}

export default CustomNavbar
