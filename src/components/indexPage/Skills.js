import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row, Container } from 'react-bootstrap'
import { brand_logos } from '../../data/data'
import Heading from '../heading'

/* Event Handlers */
const hover_handler = e => e.target.classList.add('hover');
const unhover_handler = e => e.target.classList.remove('hover');

/* Components */
const SkillsInformationItem = ({ skills }) => {

  const { title, logo } = skills;

  return (
    <Col xs={6} sm={6} md={4}>
      <div role="" className="d-flex flex-column align-items-center p-4 mb-4 text-light skill-pill"
        style={{borderRadius:'10px'}}
        onMouseEnter={hover_handler}
        onMouseLeave={unhover_handler}
        >
        <FontAwesomeIcon className="my-3 fa-3x" icon={logo} />
          <small>{title}</small>
      </div>
    </Col>
  )
}

const SkillsInformation = () => {

  return (
    <section className="skills-card">
			<Row>
        {brand_logos.map(item => (<SkillsInformationItem skills={item} key={item.id} />))}
			</Row>
    </section>
  )
}

const Skills = () => (
<div className="section-padding skill-section">
	<Container>
    <Row>
    	<Col>
				<Heading heading="My Skills" subheading="Technologies that I use" />
      </Col>
    </Row>
    <Row>
    	<Col xs={12}>
      	<SkillsInformation />
      </Col>
    </Row>
	</Container>
</div>
)


export default Skills
