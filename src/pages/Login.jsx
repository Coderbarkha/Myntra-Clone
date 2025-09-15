import React,{useState} from 'react';
import loginimg from '../assets/login-img.PNG';
function Login(){
    return(
        <div>
            <form>
                <img src={loginimg} alt='Login-image'/>
            <h2>Login or Signup</h2>
                <input type='tel'/>
                <input type='checkbox'>By continuing I agree  to the Terms Of Use & Privacy Policy 
                and I am above 18 years old.</input>
            </form>
        </div>
    )
}

export default Login;