import React from 'react'
import { Col } from 'react-bootstrap'

class showCase extends React.Component {
  styles = {
    content: {
      display:'flex',
      alignItems:'center'
    }
  }
  render () {
    const { content, image } = this.props.data
    return (
      <>
      <Col xs={12} md={6} style={this.styles.content}>
        <p>{ content }</p>
      </Col>
      <Col xs={12} md={6} className="my-5">
        <img
          src={image}
          className="img-fluid"
        />
      </Col>
      </>
    )
  }
}

export default showCase
