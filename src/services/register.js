import axios from 'axios'

const url = 'http://0.0.0.0:1337/auth/local/register'

const register = async credentials => {
    const response = await axios.post(url, credentials)
    return response.data
}

const registerMethods = {
    register
}
  
export default registerMethods