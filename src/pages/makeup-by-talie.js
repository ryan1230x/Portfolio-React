import React from "react"
import Base from '../components/projectsPage/base'
import { makeup_by_talie } from '../data/projects/data'
import Layout from "../components/layout"
import SEO from '../components/seo'

const makeupByTalie = () => {
  return (
    <Layout>
        <SEO title="Makeup By Talie" />
        <Base data={makeup_by_talie} />
    </Layout>
  )
}

export default makeupByTalie