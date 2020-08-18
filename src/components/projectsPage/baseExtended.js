import React from 'react'
import Heading from '../heading'
import { Container,Row, Col } from 'react-bootstrap'
import ShowCase from '../showCase'

class BaseExtended extends from React.Component {
  render () {
    const { title, image, futherDetails, link } = this.props.data
    return (
      <Container>
        <Row>
          <Col xs={xs} md={6}>
            <Heading heading={title} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <img src={image} />
          </Col>
        </Row>
        <Row>
         {furtherDetails.map((item, index) => (<ShowCase key={index} data={item} />))}
        </Row>
      </Container>
    )
  }
}

export default BaseExtended
