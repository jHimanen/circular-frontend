import axios from 'axios'

const url = 'http://0.0.0.0:1337/notices'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const noticesMethods = {
    getAll
}

export default noticesMethods