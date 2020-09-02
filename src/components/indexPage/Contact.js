import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/Form'
import { Col, Row, Container, Button, Alert } from 'react-bootstrap'
import Axios from 'axios'
import Heading from '../heading'


const FormAlertMessageError = props => {
    const [show, setShow] = useState(true);

    if(show)
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>        
        <p>
          { props.message }
        </p>
      </Alert>
    )
}
const FormAlertMessageSuccess = props => {
    const [show, setShow] = useState(true);

    if(show)
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>        
        <p>
          { props.message }
        </p>
      </Alert>
    )
}


const ContactFrom = () => {

  // Set State
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const sendContactInfomation = async contactInformation => {

    const url = "https://getform.io/f/798597f0-a205-4c19-ba46-e4b1fca23a80";

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      await Axios.post(url, contactInformation, config );            
      const message = "Submitted Successfully! You will be contacted as soon as possible"
      ReactDOM.render(
      <FormAlertMessageSuccess message={message}  />, document.getElementById('formMessage'))                                      

    } catch(err) {            
      const message = "Opps! An Error Occured while the form was submitting, please try again"
      ReactDOM.render(
      <FormAlertMessageError message={message}  />, document.getElementById('formMessage'))
    }
  }

    const handleSubmit = async e => {
      e.preventDefault();        
      const ContactFormInput = {name, subject, email, message}              
      sendContactInfomation(ContactFormInput);
    }

    return (                
      <Form  onSubmit={handleSubmit} >            
        <div id="formMessage"></div>            
        <Form.Row>
          <Col xs={12} md={6} className="mb-4">
            <Form.Label>Your Name</Form.Label>
            <Form.Control 
              name="name" 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              autoComplete="name" 
              type="text"
            ></Form.Control>                                    
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              name="subject" 
              onChange={(e) => setSubject(e.target.value)} 
              value={subject} 
              type="text"
            ></Form.Control>                
          </Col>
        </Form.Row>            

        <Form.Row className="mb-4">
          <Col xs={12} md={12}>
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              name="email" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              type="email" 
              autoComplete="email"
            ></Form.Control>                                
          </Col>
        </Form.Row>

        <Form.Row className="mb-4">
          <Col>
            <Form.Label>Message</Form.Label>
            <Form.Control 
              name="message" 
              onChange={(e) => setMessage(e.target.value)} 
              value={message} 
              as="textarea" 
              draggable="false"
            ></Form.Control>
          </Col>
        </Form.Row>

        <Form.Row className="mt-5">
          <Col>                    
            <Button 
              type="submit" 
              className="btn-lg text-white btn-block"
            >
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    )
}

const Contact = () => {
  return (
    <section className="section-padding contact bg-white">
      <Container>
        <Row>
          <Col xs={12} className="heading">
            <Heading heading="Contact Me" subheading="Get in touch" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ContactFrom />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
