import './App.css'
import React from "react";

import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import Primeiro from './components/basicos/Primeiro'
import ListaAlunos from './components/repeticao/ListaAlunos';
import ComParametros from './components/basicos/ComParametros'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

export default props => (
    <div className='App'>

        <div className="Cards">

            <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
                    <Input></Input>
            </Card>


            <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>

            </Card>
            <Card titulo="#09 - Comunicação direta" color="#59323C">
                <DiretaPai></DiretaPai>

            </Card>
            <Card titulo="#08 - Condicional" color="#FF4C65">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Matheus' }}></UsuarioInfo>
            </Card>

            <Card titulo="#07 - Repetição Produtos" color="#FF4C65">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Compomente Com filhos" color="#800">
                <Familia lastName="Ileck">
                    <FamiliaMembro name="Matheus"></FamiliaMembro>
                    <FamiliaMembro name="Larissa"></FamiliaMembro>
                    <FamiliaMembro name="Jack"></FamiliaMembro>

                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#080">
                <Aleatorio min={10} max={60}></Aleatorio>
            </Card>

            <Card titulo="#03 -Fragmento" color="#FA6900">
                <Fragmento></Fragmento>

            </Card>

            <Card titulo="#02 -Segundo Componente com parametros" color="#E94C6F">
                <ComParametros
                    titulo="Segundo Componente"
                    subtitulo="Muito legal">
                </ComParametros>
            </Card>

            <Card titulo="#01 -Primeiro Componente" color="#E8B71A">
                <Primeiro></Primeiro>

            </Card>

        </div>
    </div>
)