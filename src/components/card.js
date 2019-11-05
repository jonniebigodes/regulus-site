import React from "react"
import styles from "./card.module.css" 

const Card = ({title, date}) => {
    return <div className={styles.card}>
        <h3>{title}</h3>
        <p>{date}</p>
    </div>
}

export default Card;