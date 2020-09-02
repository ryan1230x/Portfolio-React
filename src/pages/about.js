import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/indexPage/About'
const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
     <div style={{paddingTop:100}}>
       <About />
     </div>
    </Layout>
  )
}

export default AboutPage
