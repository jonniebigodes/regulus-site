import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from './card';

const estiloCursos = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  };

const Cursos = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allTurmasJson {
                edges {
                    node {
                        id
                        nome
                        horario
                        prof
                        data
                    }
                }
            }
        }
    `)

    return (<div>
        <h2>Turmas abertas</h2>
        <div style={estiloCursos}>
            { data.allTurmasJson.edges.map( ({node}) => {
                return <Card key={`${node.id}${node.date}`} title={node.nome} date={node.data} teacher={node.prof} time={node.horario} id={node.curso_id}/>
            }) }
        </div>
    </div>  )
};

export default Cursos;


