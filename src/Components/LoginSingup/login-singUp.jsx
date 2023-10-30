import React from 'react';
import "./login-singUp.css";

export default class personal extends React.Component {
  constructor() {
    this.state = {
         singUp: "Sing up",
         login: "Login"
       }
     }

   LoginSignup() {
    return (
    <div className='container'>
        <div className="header">
            <div className="text">Sing up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="inputUsername">
                {/* <img src="{'user-icon'}" alt="" /> img later*/}
                <input type="text" placeholder='Name'/>
            </div>
            <div className="inputEmail">
                {/* <img src="{'email-icon'}" alt="" /> img later*/}
                <input type="email" placeholder='Email'/>
            </div>
            <div className="inputPassword">
                {/* <img src="{'password-icon'}" alt="" /> img later*/}
                <input type="password" placeholder='Password'/>
            </div>

        </div>
        <div className="forgot-password"><span>Forgot your password?</span></div>
        <div className="submit-container">
            <div className="submit">Sing up</div>
            <div className="submit">Login</div>
        </div>
    </div>
    )
    }
}
    // export default LoginSignup