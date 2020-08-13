import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import Heading from '../heading'

const AboutImage = () => (
	<div>
		<img src={"https://kalvin.netlify.app/images/about-img.jpg"} className="img-fluid" alt="Image of Ryan" />
	</div>
)


const AboutIntroduction = () => (
	<div className="intro mt-5 mt-md-0 mt-lg-0">
  	<p>
     Hi! I am Ryan, I am a hardworking passionate self taught web developer, I found my love for computers, computer programming and that is why I am constantly improving myself I love creating an idea, building it and see it become something real, I find the whole process very fulfilling.
    </p>
    <p>
     I find problem solving and puzzles that have to make me reason to get the solution very stimulating. I love camaderie, working in a team creating projects. As more complex and greater projects are only created when working together.
    </p>
    <div className="mt-5">
      <Link to="/cv" className="btn btn-primary btn-lg font-weight-bold">DownLoad CV</Link>
    </div>
  </div>
)

const About = () => (
  <div className="section-padding about-section">
		<Container>
      <Row>
        <Col>
					<Heading heading="About Me" subheading="Full Stack Web Developer" />
        </Col>
      </Row>
      <Row>
				<Col md={6} lg={5}>
					<AboutImage />
				</Col>
        <Col md={6} lg={7}>
					<AboutIntroduction />
       	</Col>
      </Row>
		</Container>
  </div>
)

export default About
