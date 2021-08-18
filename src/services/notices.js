import axios from 'axios'

const url = 'http://0.0.0.0:1337/notices'

const getAll = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const noticesMethods = {
    getAll
}

export default noticesMethods