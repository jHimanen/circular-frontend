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
                <h3>Rekisteröi uusi käyttäjä</h3>
                <div>
                    Käyttäjätunnus
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    Sähköposti
                    <input
                        type="text"
                        value={email}
                        name="email"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div>
                    Salasana
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">Rekisteröi</button>
            </form>
        </div>
    )
}

export default RegisterForm