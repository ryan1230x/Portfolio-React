import React from 'react'

class heading extends React.Component {
  styles = {

  }
  render() {	
    return (
      <>
       {this.props.heading && <h1 className="font-weight-bold">{this.props.heading}</h1>}
       {this.props.subheading && <h3 className="font-weight-light">{this.props.subheading}</h3>}
      </>
    )
  }
}
export default heading
