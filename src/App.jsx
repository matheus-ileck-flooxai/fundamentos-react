import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";


export default props => (
    <div id='app'>
        <Card titulo="#04 - DesafioAleatorio">
            <Aleatorio min={10} max={60}></Aleatorio>
        </Card>

        <Card titulo="#03 -Fragmento">
            <Fragmento></Fragmento>

        </Card>

        <Card titulo="#02 -Segundo Componente com parametros">
            <ComParametros
                titulo="Segundo Componente"
                subtitulo="Muito legal">
            </ComParametros>
        </Card>

        <Card titulo="#01 -Primeiro Componente">
            <Primeiro></Primeiro>

        </Card>




    </div>
)