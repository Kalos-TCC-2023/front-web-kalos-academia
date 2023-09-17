import axios from 'axios'

const apiKalos = axios.create({
    baseURL: 'https://kaloscorp.cyclic.cloud'
})

const apiSpeedio = axios.create({
    baseURL: 'https://api-publica.speedio.com.br'
})

export default {
    apiSpeedio,
    apiKalos,
}
