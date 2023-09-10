import axios from 'axios'

const apiKalos = axios.create({
    baseUrel: 'https://kaloscorp.cyclic.cloud'
})

export default apiKalos