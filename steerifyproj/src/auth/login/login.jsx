import React from 'react'
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Style from '../style/login.module.css'
import { Link } from 'react-router-dom';
import banner from "./../../assets/steerifyBanner.png";
import GoogleLoginButton from "../googleSignIn/GoogleLoginButton";


function loginPage() {

    const navigate = useNavigate();
    return (
        <div className={Style.logIn}>
            <div className={Style.banner}>
                <img src={banner} alt="banner" />

            </div>
            <div className={Style.form}>

                <h1>Login</h1>
                <form>
                    <div className={Style.inputContainer}>
                        <CiMail className={Style.inputIcon} />
                        <input type='email' placeholder='Email address' />
                    </div>
                    <div className={Style.inputContainer}>
                        <CiLock className={Style.inputIcon} />
                        <input type='password' placeholder='Password' />
                    </div>
                    <div className={Style.buttonContainer}>
                        <button onClick={() => navigate("/logIn")} type='submit'>Login</button>
                    
                    <div className={Style.signUpContainer}>
                        <label>Don't have an account?</label>
                        <button onClick={() => navigate("/signUp")} type='submit'>Sign Up</button>
                    </div>
                    </div>
                        <div className={Style.forgetPassword}>
                    <Link to="/">forget password</Link>
                    </div>
                    <GoogleLoginButton/>
                </form>
            </div>

        </div>
    )
}

export default loginPage

