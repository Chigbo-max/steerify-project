import React, { useState } from 'react';
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import banner from "./../../assets/steerifyBanner.png";
import Style from '../style/signUp.module.css';
import GoogleLoginButton from "../googleSignIn/GoogleLoginButton";
import {usePostSignUpMutation} from "../../services/SteerifyApi";
import Button from "../../reusables/Button";
import {ClipLoader} from "react-spinners";


function signUp() {

    const navigate = useNavigate();
    const [signUp,{data, error, isLoading}] = usePostSignUpMutation();
    const[successMessage, setSuccessMessage] = useState("");

    const[form, setForm] = useState({
        firstName :"",
        lastName:"",
        email:"",
        password:"",
    }
        );
    
    const handleFormChange =((event)=>{
        setForm({...form, [event.target.name]: event.target.value});
    })


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await signUp(form).unwrap();
            console.log(response);
            setSuccessMessage("Sign up successful... redirecting");

            setTimeout(() => {
            navigate("/");
            }, 2000);
        
        }catch(error){
            console.log("Sign up unsuccessful:", error);
            setSuccessMessage("");
        }

    
        // const data = new FormData(event.target);
        // console.log(data.get('email'));
        // console.log(data.get('password'));
        // console.log(data.get('name'));
        // const formData = new FormData(event.target);
    }

    return (
        <div className={Style.signUp}>
            <div className={Style.form}>
                <form onSubmit={handleFormSubmit}>
                    <div className={Style.inputContainer}>
                        <input type='text' placeholder='First name'value= {form.firstName} name='firstName' onChange={handleFormChange} />
                    </div>
                    <div className={Style.inputContainer}>
                        <input type='text' placeholder='Last name' value={form.lastName} name="lastName" onChange={handleFormChange} />
                    </div>

                    <div className={Style.inputContainer}>
                        <input type='email' placeholder='Type your email address' value={form.email} name="email" onChange={handleFormChange} />
                    </div>

                    <div className={Style.inputContainer}>
                        <input type='password' placeholder='Enter password' value={form.password} name="password" onChange={handleFormChange} />
                    </div>

                    <div className={Style.buttonContainer}>
                        <Button type='submit' onClick={()=> navigate("/")} action={ isLoading? <ClipLoader color="#ffff" size={50}/> : "Sign Up"} ></Button>

                        <div className={Style.orSeparator}>
                            <span>OR</span>
                            <GoogleLoginButton />
                        </div>

                        

                        <div className={Style.loginContainer}>
                            <label>Already have an account?</label>
                            <Button onClick={() => navigate("/logIn")} type='submit' action={isLoading? <ClipLoader color="#ffff" size={50}/> : "Login"}></Button>
                            {error && <p style={{ color: "red" }}>Sign up failed. Please try again 🙏</p>}
                            {successMessage && <p style={{ color: "green" }}>Sign up successful! 🎉</p>}
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
