import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }}>
      <Card title="Interpretação I" date="01/01/2020" teacher="Leonardo Lemos"/>
      <Card title="Interpretação II" date="01/01/2020" teacher="Elmer Baumgratz"/>
      <Card title="Interpretação II" date="01/01/2020" teacher="Nina Alves"/>
    </div>
  </Layout>
)

export default IndexPage
