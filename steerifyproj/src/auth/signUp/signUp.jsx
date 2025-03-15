import React from 'react'
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import banner from "./../../assets/steerifyBanner.png";
import Style from '../style/signUp.module.css'
import GoogleLoginButton from "../googleSignIn/GoogleLoginButton";


function signUp() {

    const navigate = useNavigate();
    return (
        <div className={Style.signUp}>
            <div className={Style.form}>
                <form>
                    <div className={Style.inputContainer}>
                        <input type='text' placeholder='First name' />
                    </div>
                    <div className={Style.inputContainer}>
                        <input type='text' placeholder='Last name' />
                    </div>

                    <div className={Style.inputContainer}>
                        <input type='email' placeholder='Type your email address' />
                    </div>

                    <div className={Style.inputContainer}>
                        <input type='password' placeholder='Enter password' />
                    </div>

                    <div className={Style.buttonContainer}>
                        <button type='submit'>Sign Up</button>

                        <div className={Style.orSeparator}>
                            <span>OR</span>
                            <GoogleLoginButton />
                        </div>

                        

                        <div className={Style.loginContainer}>
                            <label>Already have an account?</label>
                            <button onClick={() => navigate("/logIn")} type='submit'>LogIn</button>
                        </div>                    
                        </div>
                </form>
            </div>
            <div className={Style.banner}>
                <img src={banner} alt="banner" />

            </div>

        </div>
    )
}

export default signUp
