import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { projects_gallery } from '../data/data'

/* Event Handler */
const hover_handler = e => e.target.classList.add('hover');
const unhover_handler = e => e.target.classList.remove('hover');

/* Components */
const ProjectsTitle = () => (
    <section>
        <Container>
            <div className="heading">
                <h1 className="font-weight-bold">My Work</h1>
                <h5 className="font-weight-light">Featured Projects</h5>
            </div>
        </Container>
    </section>
)


const ProjectsGalleryItem = ({ projects }) =>  {

	const { title, img, link, about } = projects;

	return (

    <Col xs={12} md={12} lg={6} className="gallery-item" >
        <section className="inner-wrapper"
        onMouseEnter={hover_handler}
        onMouseLeave={unhover_handler}
        >
            <div className="gallery-img">
                <img src={img} alt={title} />
            </div>
            <div className="content-wrapper px-3 py-4 px-lg-3 py-lg-4 mb-4 mb-md-5 mb-lg-5">
                <div>
                    <h2 className="font-weight-bold mb-3">{title}</h2>        
                </div> 
                <div className="gallery-about">
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
        <Container>
            <Row>
            {
                projects_gallery.map(item =>
				    (<ProjectsGalleryItem
						key={item.id}
						projects={item}
					/>))
            }
            </Row>
        </Container>
    </section>    
)

/* Main Component */
const Projects = () => (
    <section className="section-padding projects">
        <ProjectsTitle />
        <ProjectsGallery />
    </section>
)


export default Projects
