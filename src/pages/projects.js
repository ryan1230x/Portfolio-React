import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCards from '../components/indexPage/Projects'

const Projects = () => (
  <Layout pageInfo={{ pageName: "projects" }}>
    <SEO title="Projects" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <ProjectCards />
  </Layout>
)

export default Projects