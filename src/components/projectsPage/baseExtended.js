import React from 'react'
import Heading from '../heading'
import { Container,Row, Col } from 'react-bootstrap'
import ShowCase from './showCase'

class BaseExtended extends React.Component {
  styles = {
    container: {
      paddingTop:'10rem'
    },
    button:{
      fontSize:'initial'
    }
  }


  render () {
    const { title, image, furtherDetails, introduction, live_website, see_code} = this.props.data
    return (
      <Container style={this.styles.container}>
        <Row>
          <Col xs={12} sm={12} md={6} className="heading">
            <Heading heading={title} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <p>{ introduction }</p>
            <section className="my-3 d-flex d-lg-block justify-content-around">
            {live_website.bool === true && (
            <a 
              style={this.styles.button}
              href={live_website.link}
              className="btn btn-primary btn-lg my-4" 
              target="_blank">
              See Live Project
            </a>)}
            {see_code.bool === true && (
            <a 
              style={this.styles.button}
              href={see_code.link}
              className="btn btn-secondary btn-lg my-4 ml-lg-3" 
              target="_blank">
              See Code
            </a>)}
            </section>
          </Col>
          <Col xs={12} md={6}>
            <img 
              src={image} 
              alt='landing-image'  
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          <h1 className="my-5">Further Details</h1> 
          </Col>
        </Row>
        <Row>
         {furtherDetails.map(item => (<ShowCase key={item.image} data={item} />))}
        </Row>
      </Container>
    )
  }
}

export default BaseExtended
