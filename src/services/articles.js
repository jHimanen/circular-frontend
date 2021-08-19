import axios from 'axios'

const url = 'http://0.0.0.0:1337/articles'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const articlesMethods = {
    getAll
}

export default articlesMethods