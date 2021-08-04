import axios from 'axios'

const url = 'http://0.0.0.0:1337/articles'

const getAll = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const articlesMethods = {
    getAll
}

export default articlesMethods