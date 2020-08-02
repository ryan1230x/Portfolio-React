import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from '../components/Projects'
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Hero />
    <About />
    <Skills />
		<Projects />
    <Contact />
  </Layout>
)

export default IndexPage
