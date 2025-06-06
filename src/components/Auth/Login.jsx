import React, { useState } from 'react'
import "../Auth/Login.css"

const Login = ({handleLogin}) => {
// console.log(handleLogin)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault()
        handleLogin(email, password)
        console.log("Email is : ",email)
        console.log("password is : ",password)

        setEmail("")
        setPassword("")
    }
    return (
        <>
            <div className="Login-wrapper">
                <div className="wrapper">
                    <form action="#" onSubmit={(event) => {submitHandler(event)}}
                    >
                        <h2>Login</h2>
                        <div className="input-field">
                            <input value={email} onChange={(event)=>{setEmail(event.target.value)}} type="email" placeholder='Enter your email' required />
                            {/* <label>Enter your email</label> */}
                        </div>
                        <div className="input-field">
                            <input value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder='Enter your email' required />
                            {/* <label>Enter your password</label> */}
                        </div>
                        <div className="forget">
                            <label htmlFor="remember">
                                <input type="checkbox" id="remember" />
                                <p>Remember me</p>
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit">Log In</button>
                        <div className="register">
                            <p>
                                Don't have an account? <a href="#">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login