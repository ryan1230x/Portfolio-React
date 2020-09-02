import React from 'react'
import Contact from '../components/indexPage/Contact'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => {
  return(
    <Layout>
      <SEO title="Contact" />
      <div style={{paddingTop:100}}>
        <Contact />
      </div>
    </Layout>
  )
}
export default ContactPage
