module.exports = {
  siteMetadata: {
    title: `Regulus Astrologia: curso de formação e livraria`,
    description: `Escola Regulus Astrologia: Cursos de formação, especialização e livraria especializada`,
    author: `@astroregulus`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Regulus | Escola de Astrologia`,
        short_name: `Regulus Astrologia`,
        start_url: `/`,
        background_color: `#011830`,
        theme_color: `#011830`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
