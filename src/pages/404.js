import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const styles = {
  root:{
    position:'absolute',
    top:'50%',
    textAlign:'center',
    translateY:'-50%',
    width:'100%'
  },
  img: {
    height:'auto',
    maxWidth:'100%'
  }
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className={styles.root}>
      <h1>NOT FOUND</h1>
      <img
        src={require('../404.svg')}
        className={styles.img}
        alt="404 svg"
       />
    </section>
  </Layout>
)

export default NotFoundPage
