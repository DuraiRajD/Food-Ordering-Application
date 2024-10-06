import React, { Fragment, useState } from "react"
import './LoginPopup.css'
import { assets } from "../../assets/assets"
const LoginPopup=({setShowLogin})=>{
    const[currState,setCurrState]=useState("Login")
    return(
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""></img>
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<Fragment></Fragment>: <input type="text" placeholder="your name" required></input>}
                    <input type="email" placeholder="your email" required></input>
                    <input type="password" placeholder="Password" required></input>
                </div>
                <button>{currState==="Sign UP"?"Create account":"Login"}</button>
                <div className="login-popup-condition">
                <input type="checkbox"></input>
                <p>By continuing, iagree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login"
                ?<p className="loginup-signup">Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p className="loginup-signup">Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
                
                
            </form>
    
        </div>
    )
}

export default LoginPopup