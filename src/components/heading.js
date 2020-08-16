import React from 'react'

class heading extends React.Component {
  render() {	
    return (
      <div className="heading">
       {this.props.heading && <h1 className="font-weight-bold display-3">{this.props.heading}</h1>}
			 {this.props.subheading && <h3 className="font-weight-light">{this.props.subheading}</h3>}
    </div>
    )
  }
}
export default heading
