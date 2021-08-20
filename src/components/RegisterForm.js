import React, {useState} from 'react'
import './Form.css'

const RegisterForm = ({ register }) => {

    const [username, setUsername] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')

    const submitCredentials = (event) => {
        event.preventDefault()
        register({
            username: username,
            email: email,
            password: password
        })
    }
    return (
        <div>
            <form onSubmit={submitCredentials}>
                <h3>Register new user</h3>
                <div>
                    Username
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    Email
                    <input
                        type="text"
                        value={email}
                        name="email"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div>
                    Password
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm