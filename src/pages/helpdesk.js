import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BaseExtended from '../components/projectsPage/baseExtended'
import { helpdesk } from '../data/projects/data'
import Base from '../components/projectsPage/base'


const Helpdesk = () => {
  return (
    <Layout pageInfo={{ pageName: "Helpdesk" }} >
      <SEO title="Helpdesk" />
      <BaseExtended data={ helpdesk }  />
    </Layout>
  )
}

export default Helpdesk
