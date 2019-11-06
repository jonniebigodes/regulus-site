import React from "react"

import Card from './card';

const Cursos = () => {
    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>
        <Card title="Interpretação I" date="01/01/2020" teacher="Leonardo Lemos" time="20h00 às 22h00"/>
        <Card title="Interpretação II" date="01/01/2020" teacher="Elmer Baumgratz" time="16h30 às 18h30"/>
        <Card title="Interpretação II" date="01/01/2020" teacher="Nina Alves" time="14h00 às 16h00"/>
        <Card title="Interpretação II" date="01/01/2020" teacher="Nina Alves" time="14h00 às 16h00"/>
      </div>
};

export default Cursos;