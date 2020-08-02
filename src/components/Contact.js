import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import { Col, Row, Container, Button } from 'react-bootstrap'
import Axios from 'axios'

const ContactTitle = ( )=> (
    <div className="heading text-white">
        <h1 className="font-weight-bold">Contact Me</h1>
        <h4 className="font-weight-light">Get in touch</h4>
    </div>
)

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
            console.log(true)
            
        } catch(err) {
            console.log(false)
        }
    }

    const onSubmit = async e => {
        e.preventDefault();        

        const ContactFormInput = {name, subject, email, message}
        
        sendContactInfomation(ContactFormInput);
    }

    return (        
        <Form  onSubmit={onSubmit} style={{ maxWidth:'50%', margin: '0 auto'}}>
            <Form.Row>
                <Col xs={12} md={6} className="mb-4">
                    <Form.Label className="text-white">Your Name</Form.Label>
                    <Form.Control name="name" onChange={(e) => setName(e.target.value)} value={name} autoComplete="name" type="text"></Form.Control>                                    
                </Col>
                <Col xs={12} md={6} className="mb-4">
                    <Form.Label className="text-white">Subject</Form.Label>
                    <Form.Control name="subject" onChange={(e) => setSubject(e.target.value)} value={subject} type="text"></Form.Control>                
                </Col>
            </Form.Row>            

            <Form.Row className="mb-4">
                <Col xs={12} md={12}>
                    <Form.Label className="text-white">Email Address</Form.Label>
                    <Form.Control name="email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" autoComplete="email"></Form.Control>                                
                </Col>
            </Form.Row>

            <Form.Row className="mb-4">
                <Col>
                    <Form.Label className="text-white">Message</Form.Label>
                    <Form.Control name="message" onChange={(e) => setMessage(e.target.value)} value={message} as="textarea" draggable="false"></Form.Control>
                </Col>
            </Form.Row>

            <Form.Row className="mt-5">
                <Col>                    
                    <Button type="submit" className="btn-lg text-white btn-block">
                        Submit
                    </Button>
                </Col>
            </Form.Row>

        </Form>
    )
}

const Contact = () => {
    return (
        <section className="section-padding contact">
            <Container>
                <Row>
                    <Col xs={12}>
                        <ContactTitle />
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