import axios from 'axios'

const url = 'http://0.0.0.0:1337/materials'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const materialsMethods = {
    getAll
}

export default materialsMethods