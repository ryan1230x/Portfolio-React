import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Heading from '../heading'

class Base extends React.Component {

  styles = {
    container: {
      paddingTop:'10rem'
    },
    button:{
      fontSize:'initial'
    }
  }
  
  render() {
    const { title, introduction, furtherDetails, live_website, see_code, image } = this.props.data    
    return (
      <Container style={this.styles.container}>
        <Row>
          <Col xs={12} sm={12} md={6} className="heading">
            <Heading heading={title} />
          </Col>
          </Row>
          <Row>
          <Col>
            <p>{introduction}</p>
            <section className="my-3 d-flex d-lg-block justify-content-around"> 
            {live_website.bool === true && (
              <a 
              style={this.styles.button}
              href={live_website.link}
              className="btn btn-primary btn-lg my-4 text-white" 
              target="_blank">
              See Live Project
            </a>
            )}
            {see_code.bool === true && (
              <a 
              style={this.styles.button}
              href={see_code.link}
              className="btn btn-secondary btn-lg my-4 ml-3" 
              target="_blank">
              See Code
            </a>
            )}            
            </section>
          </Col>
          <Col md={6}>
            <img src={image} alt="landing" className="img-fluid"/>
          </Col>
        </Row>
        <section className="mt-5">
          <Row>
            <Heading heading="Further details" />
          </Row>
          <Row>
            <Col xs={12}>
              {furtherDetails.map(item => <p>{item}</p>)}
            </Col>
          </Row>
        </section>
      </Container>
    )
  }
}
export default Base
