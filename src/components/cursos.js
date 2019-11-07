import React from "react"
import Card from './card';

const estiloCursos = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  };

const Cursos = () => {
    return (<div>
        <h2>Turmas abertas</h2>
        <div style={estiloCursos}>
            <Card title="Interpretação I" date="01/01/2020" teacher="Leonardo Lemos" time="20h00 às 22h00"/>
            <Card title="Interpretação II" date="01/01/2020" teacher="Elmer Baumgratz" time="16h30 às 18h30"/>
            <Card title="Interpretação II" date="01/01/2020" teacher="Nina Alves" time="14h00 às 16h00"/>
            <Card title="Interpretação II" date="01/01/2020" teacher="Nina Alves" time="14h00 às 16h00"/>
        </div>
    </div>  )
};

export default Cursos;