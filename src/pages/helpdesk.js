import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Base from '../components/projectsPage/base'
import { helpdesk } from '../data/projects/data'

const Helpdesk = () => {
  return (
    <Layout pageInfo={{ pageName: "Helpdesk" }} >
      <SEO title="Helpdesk" />
      <Base data={ helpdesk }  />
    </Layout>
  )
}

export default Helpdesk
