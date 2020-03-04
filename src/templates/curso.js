import * as PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class CursoTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      allCursosJson: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            curso_id: PropTypes.string,
            nome: PropTypes.string,
            descricao: PropTypes.string,
          })
        ),
      }),
    }),
  }
  render() {
    const { data } = this.props
    const { allCursosJson } = data
    const { edges } = allCursosJson

    return (
      <Layout>
        {edges.map(edge => (
          <div key={`curso_${edge.node.id}`}>
            <SEO title={edge.node.nome} />
            <h1>{edge.node.nome}</h1>
            <p>{edge.node.descricao}</p>
          </div>
        ))}
      </Layout>
    )
  }

  // initial code
  // static propTypes = {
  //   data: PropTypes.shape({
  //     cursosJson: PropTypes.object.isRequired,
  //   }),
  // }
  // render() {
  //   console.log(
  //     `Curso Template data:${JSON.stringify(
  //       this.props.data,
  //       null,
  //       2
  //     )}\npagecontext:${JSON.stringify(this.props.pageContext, null, 2)}`
  //   )
  //   return (
  //     <Layout>
  //       {/*  <SEO title={this.props.data.cursosJson.nome} />
  //       <h1>{this.props.data.cursosJson.nome}</h1>
  //       <p>{this.props.data.cursosJson.descricao}</p> */}
  //       soon
  //     </Layout>
  //   )
  // }
}

export default CursoTemplate

// original query

/* export const pageQuery = graphql`
  query($id_curso: String!) {
    cursosJson(id: { eq: $id_curso }) {
      nome
      descricao
    }
  }
`
 */

// first approach

/* export const pageQuery = graphql`
  query($id_curso: String!) {
    cursosJson(id: { eq: $id_curso }) {
      nome
      descricao
    }
  }
` */

// works
export const pageQuery = graphql`
  query($id_curso: String!) {
    allCursosJson(filter: { curso_id: { eq: $id_curso } }) {
      edges {
        node {
          id
          curso_id
          nome
          descricao
        }
      }
    }
  }
`
