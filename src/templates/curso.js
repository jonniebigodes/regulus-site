import * as PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class CursoTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
        cursosJson: PropTypes.object.isRequired,
    }),
  }
  render() {
    console.log(this.props.data);
    return (
      <Layout>
            <SEO title={this.props.data.cursosJson.nome} />
            <h1>{this.props.data.cursosJson.nome}</h1>
            <p>{this.props.data.cursosJson.descricao}</p>
      </Layout>
    )
  }
}

export default CursoTemplate

export const pageQuery = graphql`
  query($id: String!) {
    cursosJson(id: { eq: $id }) {
      nome,
      descricao
    }
  }
`
