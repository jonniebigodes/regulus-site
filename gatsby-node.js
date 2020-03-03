/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions


    const result = await graphql(
        `
          {
            allCursosJson(limit: 1000) {
              edges {
                node {
                  id
                  descricao
                  nome
                }
              }
            }
          }
        `
      )

    const cursoTemplate = path.resolve(`src/templates/curso.js`)

    result.data.allCursosJson.edges.forEach(edge => {
        console.log(edge)
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/cursos/${edge.node.id}/`,
          component: slash(cursoTemplate),
          context: {
            id: edge.node.id,
            nome: edge.node.nome,
            descricao: edge.node.descricao
          },
        })
      })
}
