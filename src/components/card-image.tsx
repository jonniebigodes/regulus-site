import React from "react"
import styles from "./card-image.module.css" 
import livraria from "../images/livraria.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    image,
    text: string,
    title: string
}

const estiloDiv = {
    backgroundColor: "#011830",
    opacity: "0.8",
    position: "absolute",
    bottom: "5px",
    width: "35%",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
        
    color: "white",

    padding: "5px",
}

export const CardImage = (props: Props) => {
    return <div className={styles.card}>
                <div style={{position: "relative"}}>
                    <div style={estiloDiv}>
                        <p>{props.title}</p>
                    </div>
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