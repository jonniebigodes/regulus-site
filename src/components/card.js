import React from "react"
import styles from "./card.module.css" 

const Card = ({title, date, time, teacher}) => {
    return <div className={styles.card}>
        <div className={styles.main}>
            <h3>{title}</h3>
            <p>Data de início: {date}</p>
            <p>Horário: {time}</p>
            <p>Professor(a): {teacher}</p>
        </div>
        <div className={styles.cardBottom}>
            Mais informações
        </div>
        
        
    </div>
}

export default Card;