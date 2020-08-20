import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class showCase extends React.Component {
  render () {
    const { content, image } = this.props.data
    return (
      <Col xs={12} md={6}>
        <p>{ content }</p>
      </Col>
      <Col xs={12} md={6}>
        <img
          src={image}
          className="img-fluid"
        />
      </Col>
    )
  }
}

export default showCase
