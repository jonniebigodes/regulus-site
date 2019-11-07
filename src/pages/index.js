import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Formacao from "../components/formacao"
import Localizacao from "../components/localizacao"
import Livraria from "../components/livraria"
import { Link } from "gatsby"
import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.formacao}>
      <h2>Formação Astrológica</h2>
      <p>Concluindo a parte básica, escolha a melhor forma de estudar Astrologia, monte sua grade curricular. Atingindo a carga horária mínima, o aluno poderá solicitar seu certificado de Formação em Astrologia.Mesmo não tendo cursado os módulos iniciais na Regulus, poderá frequentar nossos cursos ou escolher determinado módulo ou especialização que desejar.Todos os cursos/módulos/workshop fazem parte do curso livre de Formação em Astrologia, somando horas para a obtenção do Certificado de Formação em Astrologia.</p>
      <Link to="/cursos">Veja turmas abertas</Link>
    </div>
    <Livraria />
    <Formacao />
    <Localizacao />
  </Layout>
)

export default IndexPage
