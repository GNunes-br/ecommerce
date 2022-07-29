import { createContext, useState } from 'react';

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider({ children }){
    const [usuario, setUsuario]= useState({})

    function login(email, senha){
        if(email === 'guilherme@email.com' && senha === '123'){
            setUsuario({
                nome: 'Guilherme',
                email,
                endereco: 'Rua Rosa, 191',
                telefone: '(35) 99999-9999'
            })
            return 'ok'
        } else {
            return 'Email ou senha incorretos'
        }
    }

    return (
        <AutenticacaoContext.Provider value={{
            usuario, login
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}