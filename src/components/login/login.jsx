import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './login.css';
function Login() {
    return (

        <div class="login">
           
                <form>
                <h2>Sign in</h2>
                <div class="input-form">
                    <p>Email or mobile phone number:</p>
                    <input type="email"/>
                </div>
                <div class="input-form">
                    <p>Password:</p>
                    <input type="password"/>
                </div>
                <button class='login-button'>Login</button>

            </form>
            <div class="divider"><h5>New User?</h5></div>
            <a href='/signup'><button class="Signup-button" >Sign Up</button></a>

</div>
            


    )
}
export default Login;