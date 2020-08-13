import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/indexPage/hero"
import About from "../components/indexPage/About"
import Skills from "../components/indexPage/Skills"
import Projects from '../components/indexPage/Projects'
import Contact from "../components/indexPage/Contact"

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
