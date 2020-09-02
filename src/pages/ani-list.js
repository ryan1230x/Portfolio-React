import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {anilist} from '../data/projects/data'
import Base from '../components/projectsPage/base'

const AniList = () => {
  return(
    <Layout>
      <SEO title="AniList" />
      <Base data={anilist} />
    </Layout>
  )
}
export default AniList