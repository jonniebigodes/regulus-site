import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {CardImage} from "../components/card-image"
import styles from "./index.module.css"
import livraria from "../images/livros.png"
import sala from "../images/estudantes.png"
import workshop from "../images/class.png"
import formacao from "../images/undraw_career_development_oqcb.png"

const estiloCards = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap"
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={estiloCards}>
      <CardImage 
          text="Veja os workshops programados e garanta sua vaga!"
          title="Workshops"
          image={workshop}
          navigateTo="/cursos" />
        <CardImage 
          text="Veja nossas turmas com vagas abertas!"
          title="Cursos"
          image={sala}
          navigateTo="/cursos" />
        <CardImage 
          text="A Livraria da Regulus possui um dos maiores acervos de títulos sobre Astrologia, incluído muitos títulos esgotados e raros."
          title="Livraria"
          image={livraria} />
        <CardImage 
          text="Confira nossa grade curricular!"
          title="Formação"
          image={formacao}
          navigateTo="/formacao" />
    </div>
   
    <div className={styles.sessao}>
      <h2>Localização</h2>
      <p>Rua Estela, 515 cj.71 - Bl. E - próximo ao Metrô Paraíso</p>
      <iframe width="100%" height="300" frameBorder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsWC2m5FZzpQRndvYvoxUM08&key=AIzaSyA9pQxGOAOAkZz5mu5kT0BFRghJ1Cqt478" allowFullScreen></iframe> 
      <p>São Paulo/SP | 04011-904</p>
    </div>
  </Layout>
)

export default IndexPage
