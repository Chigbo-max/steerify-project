import React, { useState } from 'react';
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Style from '../style/login.module.css';
import { Link } from 'react-router-dom';
import banner from "./../../assets/steerifyBanner.png";
import GoogleLoginButton from "../googleSignIn/GoogleLoginButton";
import { usePostLogInMutation } from "../../services/SteerifyApi";
import Button from "../../reusables/Button";
import {ClipLoader} from "react-spinners";

function loginPage() {

    const navigate = useNavigate();
    const [logIn, { data, error, isLoading }] = usePostLogInMutation();
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await logIn(formData).unwrap();
            console.log(response)
            setSuccessMessage("Login Successful");
        } catch (error) {
            console.log("Failed to login in, please check your password/email and try again")
            setSuccessMessage("");
        }
    }




    const handleFormChange = ((event) => {
        (
            setFormData({...formData, [event.target.name]: event.target.value})
        )
    })

    return (
        <div className={Style.logIn}>
            <div className={Style.banner}>
                <img src={banner} alt="banner" />

            </div>
            <div className={Style.form}>

                <form onSubmit={handleSubmit}>
                    <div className={Style.inputContainer}>
                        <CiMail className={Style.inputIcon} />
                        <input type='email' placeholder='Email address' name="email" value={formData.email} onChange={handleFormChange} />
                    </div>
                    <div className={Style.inputContainer}>
                        <CiLock className={Style.inputIcon} />
                        <input type='password' placeholder='Password' name="password" value={formData.password} onChange={handleFormChange} />
                    </div>
                    <div className={Style.buttonContainer}>
                        <Button onClick={() => navigate("/logIn")} type='submit' action = {isLoading? <ClipLoader color="#ffff" size={50}/> : "Login"}></Button>

                        <div className={Style.signUpContainer}>
                            <label>Don't have an account?</label>
                            <Button onClick={() => navigate("/signUp")} type='submit' action= {isLoading? <ClipLoader color="#ffff" size={50}/> : "Sign Up"}></Button>  
                        </div>
                    </div>
                    <div className={Style.forgetPassword}>
                        <Link to="/">forget password</Link>
                    </div>
                    <GoogleLoginButton />
                    {error && <div className={Style.error}><p>"Login unsuccessful. Please check your email/password 🙏"</p></div>}
                    {successMessage && <div className={Style.success}>{successMessage}</div>}
                </form>
            </div>

        </div>
    )
}

export default loginPage

