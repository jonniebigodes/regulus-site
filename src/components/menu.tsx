import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./menu.module.css" 

export const Menu = () => {
    const [isExpanded, toggleExpansion] = useState(false);
    const closeMenu = () => toggleExpansion(false);

    return <div >
        {isExpanded ? <div className={styles.menuBackground}>
            <div className={styles.menuContainer}>
                <FontAwesomeIcon 
                    icon={["fas","times"]} 
                    size="2x"
                    color="orange"
                    style={{cursor: "pointer"}}
                    onClick={() => toggleExpansion(!isExpanded)} />
                <ul style={{listStyle: "none", margin: 0, textAlign: "center", paddingTop: "20px"}}>
                    <li><Link to="/" onClick={closeMenu} className={styles.menuItem}>Home</Link></li>
                    <li><Link to="/cursos" onClick={closeMenu} className={styles.menuItem}>Cursos</Link></li>
                    <li><Link to="/formacao" onClick={closeMenu} className={styles.menuItem}>Formação</Link></li>
                </ul>
            </div>
        </div> : 
        <FontAwesomeIcon 
            icon={["fas","bars"]} 
            size="lg"
            color="orange"
            style={{cursor: "pointer"}}
            onClick={() => toggleExpansion(!isExpanded)} />
        }
    </div>
}