import React from "react"
import styles from "./card-image.module.css" 
import livraria from "../images/livraria.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    image,
    text: string
}

export const CardImage = (props: Props) => {
    return <div className={styles.card}>
                <div>
                    <img src={props.image} alt="" style={{margin:0, width:"100%"}}/>
                </div>
                <div className={styles.cardBottom}>
                    <p>{props.text}</p>
                </div>
                <div style={{display: "flex", justifyContent:"flex-end", paddingRight:"5px", paddingBottom:"5px"}}>
                    <FontAwesomeIcon icon={["fas","arrow-circle-right"]} fixedWidth={true}></FontAwesomeIcon>
                </div> 
            </div>
}