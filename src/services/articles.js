import axios from 'axios'

const url = 'http://0.0.0.0:1337/articles'

const getAll = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const deleteOne = (id) => {
    const req = axios.delete(`${url}/${id}`)
    return req.then(res => res.data)
}

const articlesMethods = {
    getAll,
    deleteOne
}

export default articlesMethods