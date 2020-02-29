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
import { faCalendarAlt, faClock, faChalkboardTeacher, faArrowCircleRight, faBars , faTimes} from '@fortawesome/free-solid-svg-icons'

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

library.add(fab, faInstagram, faCalendarAlt, faClock, faChalkboardTeacher, faArrowCircleRight, faBars, faTimes);



const Layout = ({ children }) => {
  

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
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
