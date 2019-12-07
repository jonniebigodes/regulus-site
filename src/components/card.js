import React from "react"
import styles from "./card.module.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({title, date, time, teacher}) => {
    return <div className={styles.card}>
        <div className={styles.main}>
            <h3>{title}</h3>
            <p><FontAwesomeIcon icon={["fa","calendar-alt"]} fixedWidth={true}></FontAwesomeIcon> {date}</p>
            <p><FontAwesomeIcon icon={["fa","clock"]} fixedWidth={true}></FontAwesomeIcon> {time}</p>
            <p><FontAwesomeIcon icon={["fa","chalkboard-teacher"]} fixedWidth={true}></FontAwesomeIcon> {teacher}</p>
        </div>
        <div className={styles.cardBottom}>
            Mais informações
        </div>
        
        
    </div>
}

export default Card;