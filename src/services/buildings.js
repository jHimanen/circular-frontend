import axios from 'axios'

const url = 'http://0.0.0.0:1337/buildings'

const getAll = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const buildingsMethods = {
    getAll
}

export default buildingsMethods