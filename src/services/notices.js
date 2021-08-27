import axios from 'axios'

const baseURL = 'http://0.0.0.0:1337/notices'

const getAll = async (user) => {
    console.log(user)
    if (user === null) {
        const response = await axios.get(baseURL)
        return response.data
    } else {
        const url = `${baseURL}?token=${user.user.token.token}`
        const response = await axios.get(url)
        return response.data
    }
}

const noticesMethods = {
    getAll
}

export default noticesMethods