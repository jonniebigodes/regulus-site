import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cursos from "../components/cursos"
import Formacao from "../components/formacao"
import Localizacao from "../components/localizacao"
import Livraria from "../components/livraria"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cursos />
    <Livraria />
    <Formacao />
    <Localizacao />
  </Layout>
)

export default IndexPage
