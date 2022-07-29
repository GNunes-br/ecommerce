import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import { claro, escuro } from '../estilosGlobais';

export const TemaContext = createContext({})

export function TemaProvider({ children }){
    const [temaAtual, setTemaAtual] = useState('escuro')

    const temas = {
        'escuro': escuro,
        'claro': claro,
    }

    async function salvarTemaNoDispositivo(tema){
        await AsyncStorage.setItem('@tema', tema)
        setTemaAtual(tema)
    }

    useEffect(async () => {
        const temaSalvo = await AsyncStorage.getItem('@tema')
        if(temaSalvo){
            setTemaAtual(temaSalvo)
        }
    }, [])

    return (
        <TemaContext.Provider value={{
            temaAtual,
            temaEscolhido: temas[temaAtual],
            salvarTemaNoDispositivo
        }}>
            {children}
        </TemaContext.Provider>
    )
}