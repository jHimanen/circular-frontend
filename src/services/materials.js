import axios from 'axios'

const url = 'http://0.0.0.0:1337/materials'

const getAll = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const materialsMethods = {
    getAll
}

export default materialsMethods