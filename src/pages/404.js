import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Página não encontrada</h1>
    <Link to="/">Clique aqui para voltar a página inicial.</Link>
  </Layout>
)

export default NotFoundPage
