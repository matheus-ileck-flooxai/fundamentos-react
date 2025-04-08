import React from 'react'
import Produtos from '../../data/Produtos'
import './TabelaProdutos.css'

export default props => {

    const ProdutosTh = Produtos.map((produto, i) => {

        return (
            <tr className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.name}</td>
                <td>{produto.preco}</td>
            </tr>


        )

    })
    return (

        <div className='TabelaProdutos'>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>

                {ProdutosTh}
            </table>
        </div>

    )


}