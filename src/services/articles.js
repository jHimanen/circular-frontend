import axios from 'axios'

const url = 'http://0.0.0.0:1337/articles'

const getAll = () => {
    console.log('Requesting refresh (see strapi CLI for logs)')
    const req = axios.get(url)
    return req.then(res => res.data)
}

const deleteOne = (id) => {
    console.log('Requesting delete, see Strapi CLI for logs')
    const req = axios.delete(`${url}/${id}`)
    return req.then(res => res.data)
}

const articlesMethods = {
    getAll,
    deleteOne
}

export default articlesMethods