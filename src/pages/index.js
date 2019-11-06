import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cursos from "../components/cursos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cursos />
  </Layout>
)

export default IndexPage
