import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Heading from '../heading'

class Base extends React.Component {

  styles = {
    container: {
      paddingTop:'10rem'
    }
  }
  
  render() {
    const { title, link, introduction, furtherDetails } = this.props.data    
    return (
      <Container style={this.styles.container}>
        <Row>
          <Col md={6}>
            <Heading heading={title} />
            <p>{introduction}</p>
            <a 
              href={link}
              className="btn btn-primary btn-lg my-4" 
              target="_blank">
              See Live Project
            </a>
          </Col>
          <Col md={6}>
            <img src="" alt="landing" />
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
