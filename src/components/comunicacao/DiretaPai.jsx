import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props =>{

    return (

        <div>
            <DiretaFilho nome="Matheus" idade={23} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Larissa" idade={20} nerd={false}></DiretaFilho>


        </div>

    )

}