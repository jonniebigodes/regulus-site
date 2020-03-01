import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Menu} from "./menu"
import logo from "../images/logo_regulus.png";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#011830`,
      marginBottom: `1.45rem`,
      display: "grid",
      gridTemplateColumns: "1fr 2fr 1fr ",
      alignItems: "center"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.45rem 0 `,
        gridColumnStart: 2,
        alignItems: "center"
      }}
    >
      <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: `0 auto`,
            display: "flex",
            flexFlow: "column",
            alignItems: "center"
          }}
        >
          <img src={logo} alt="Regulus Astrologia" style={{width: "48px", margin:"0 5px"}}/>
          <h1 style={{fontWeight: "lighter", margin: 0}}>{siteTitle}</h1>
        </Link>
    </div>
    <div style={{margin: "auto"}}>
      <Menu />
    </div> 
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
