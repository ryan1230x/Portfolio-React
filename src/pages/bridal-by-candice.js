import React from 'react'
import SEO from '../components/seo'
import Layout from  '../components/layout'
import Base from '../components/projectsPage/base'
import { bridal_by_candice } from '../data/projects/data';

const bridalByCandice = () => {  

  return (
    <Layout pageInfo={{ pageName:"bridal-by-candice" }}>
      <SEO title="Bridal By Candice" />
      <Base data={bridal_by_candice} />
    </Layout>
  )
}
export default bridalByCandice
