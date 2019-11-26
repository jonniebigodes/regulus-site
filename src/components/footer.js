import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./footer.module.css" 

const socialMediaStyle = {
    margin: '0 15px'
  }

const Footer = () => {
    return <footer className={styles.footer}>
            <div><a href="tel:+551155492655" className={styles.telefone}>(11)5549-2655</a> (14h~19h)</div>
            <div><a href="mailto:astrologia@regulus.com.br" className={styles.email}>astrologia@regulus.com.br</a></div>
            <div>
              <a href="https://www.instagram.com/regulus.astrologia" 
                target="_blank" rel="noopener noreferrer" style={socialMediaStyle}>
                <FontAwesomeIcon icon={["fab", "instagram"]} style={{color:"white"}} size={"2x"}></FontAwesomeIcon>
              </a>
              <a href="https://www.facebook.com/regulus.cursos" target="_blank" rel="noopener noreferrer" style={socialMediaStyle}>
                <FontAwesomeIcon icon={["fab", "facebook-square"]} style={{color:"white"}} size={"2x"}></FontAwesomeIcon>
              </a>
            </div>
        </footer>
}

export default Footer;