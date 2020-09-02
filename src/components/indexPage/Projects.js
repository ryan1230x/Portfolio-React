import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { projects_gallery } from '../../data/data'
import Heading from '../heading'

/* Components */
const ProjectsGalleryItem = ({ projects }) =>  {

	const { title, img, link, about } = projects;

	return (
    <Col xs={12} md={12} lg={6} className="gallery-item" >
      <section className="inner-wrapper" >
        <div className="gallery-img">
          <img src={img} alt={title} />
        </div>
        <div className="content-wrapper px-3 py-4 px-lg-3 py-lg-4 mb-4 mb-md-5 mb-lg-5">
          <div>
            <h2 className="font-weight-bold mb-4">{title}</h2>        
          </div> 
          <div className="gallery-about mb-4">
            <p style={{ fontWeight:'600' }}>{about}</p>
          </div>
          <div className="gallery-actions">
            <Link to={link} className="btn btn-primary btn-lg font-weight-bold text-white">See More</Link>
          </div>
        </div>
      </section>
    </Col>
	)
}


const ProjectsGallery = () => (
  <section>
    <Row>
        {projects_gallery.map(item =>(<ProjectsGalleryItem key={item.id} projects={item} />))}
    </Row>
  </section>    
)

/* Main Component */
const Projects = () => (
  <section className="section-padding projects">
    <Container>
      <Row>
        <Col xs={12} className="heading">
          <Heading heading="My Work" subheading="Featured Projects" />
        </Col>
      </Row>
      <ProjectsGallery />
    </Container>
  </section>
)

export default Projects
