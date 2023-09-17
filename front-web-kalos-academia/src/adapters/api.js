import axios from 'axios'

export const apiKalos = axios.create({
    baseURL: 'https://kaloscorp.cyclic.cloud'
})

const apiSpeedio = axios.create({
    baseURL: 'https://api-publica.speedio.com.br'
})

export default apiSpeedio
