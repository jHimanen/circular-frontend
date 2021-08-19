import axios from 'axios'

const url = 'http://0.0.0.0:1337/auth/local'

const login = async credentials => {
    const response = await axios.post(url, credentials)
    return response.data
}

const loginMethods = {
    login
}
  
export default loginMethods