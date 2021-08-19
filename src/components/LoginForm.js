import React, {useState} from 'react'

const LoginForm = ({ login }) => {

    const [identifier, setIdentifier] = useState('') 
    const [password, setPassword] = useState('')

    const submitCredentials = (event) => {
        event.preventDefault()
        login({
            identifier: identifier,
            password: password
        })
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={submitCredentials}>
                <div>
                    Username
                    <input
                        type="text"
                        value={identifier}
                        name="identifier"
                        onChange={({ target }) => setIdentifier(target.value)}
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
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm