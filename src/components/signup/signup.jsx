import React from 'react';
import './signup.css';

function Signup() {
    return (

        <div class="signup">
                <form >
                <h2>Create Account</h2>
                <div class="input-form">
                    <p>Your Name:</p>
                    <input type="text"/>
                </div>
                <div class="input-form">
                    <p>Mobile number:</p>
                    <input type="number" min="1000000000" max="9999999999"/>
                </div>
                <div class="input-form">
                    <p>Email:</p>
                    <input type="email"/>
                </div>
                <div class="input-form">
                    <p>Password:</p>
                    <input type="password"/>
                </div>
                
                <button class='login-button'>Continue</button>
                <p class= "sign">Already have an account? <a href="/login" >Sign in</a>
                </p>
                

            </form>
          
            
</div>
            


    )
}
export default Signup;