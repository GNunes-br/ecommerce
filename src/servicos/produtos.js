import api from './api'

export async function salvar(produto) {
    try {
        const resultado = await api.post('/produtos', produto)
        return resultado.data
    } catch (error) {
        console.log(error)
        return {}
    }
}

export async function listar() {
    try {
        const resultado = await api.get('/produtos')
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}