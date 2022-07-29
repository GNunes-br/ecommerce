import { createContext, useEffect, useState } from 'react';
import { listar, salvar } from '../servicos/produtos';

export const ProdutosContext = createContext({})

export function ProdutosProvider({ children }){
    const [quantidade, setQuantidade]= useState(0)
    const [carrinho, setCarrinho]= useState([])
    const [ultimosVistos, setUltimosVistos] = useState([])

    useEffect(async () => {
        const resultado = await listar()
        setCarrinho(resultado)
        setQuantidade(resultado.legth) 
    }, [])

    async function viuProduto(produto){
        setQuantidade(quantidade+1)

        const resultado = await salvar(produto)

        let novoCarrinho = carrinho
        novoCarrinho.push(resultado)
        setCarrinho(novoCarrinho)

        let novoUltimosVistos = new Set(ultimosVistos)
        novoUltimosVistos.add(resultado)
        setUltimosVistos([...novoUltimosVistos])
    }

    return (
        <ProdutosContext.Provider value={{
            quantidade, carrinho, ultimosVistos, viuProduto
        }}>
            {children}
        </ProdutosContext.Provider>
    )
}