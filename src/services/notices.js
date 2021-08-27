import axios from 'axios'

const url = 'http://0.0.0.0:1337/notices'

const getAll = async (user) => {
    if (user === null) {
        const response = await axios.get(url)
        return response.data
    } else {
        const tags = user.user.tags.forEach(tag => tag.tag)
        const options = {
            params: {
                token: user.user.token.token,
                tags: tags
            }
        }
        const response = await axios.get(url, options)
        return response.data
    }
}

const noticesMethods = {
    getAll
}

export default noticesMethods