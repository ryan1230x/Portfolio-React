import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BaseExtended from '../components/projectsPage/baseExtended'
import {eCommerce } from '../data/projects/data'

const ECommerce = () => {
  return (
    <Layout>
      <SEO title="e-commerce" />
      <BaseExtended data={eCommerce} />
    </Layout>
  )
}

export default ECommerce
