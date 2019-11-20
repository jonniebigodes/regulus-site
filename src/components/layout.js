/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "./header"
import "./layout.css"

library.add(fab, faInstagram);



const Layout = ({ children }) => {
  const socialMediaStyle = {
    margin: '0 15px'
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={"REGULUS"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <footer 
          style={{
            backgroundColor: "#011830",
            color: "white",
            textAlign: "center",
            padding: "10px"
          }}>
            <div style={{
            }}>
              <a href="https://www.instagram.com/regulus.astrologia" 
                target="_blank" rel="noopener noreferrer" style={socialMediaStyle}>
                <FontAwesomeIcon icon={["fab", "instagram"]} style={{color:"white"}} size={"2x"}></FontAwesomeIcon>
              </a>
              <a href="https://www.facebook.com/regulus.cursos" target="_blank" rel="noopener noreferrer" style={socialMediaStyle}>
                <FontAwesomeIcon icon={["fab", "facebook-square"]} style={{color:"white"}} size={"2x"}></FontAwesomeIcon>
              </a>
            </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
