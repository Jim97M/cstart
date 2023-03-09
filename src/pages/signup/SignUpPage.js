import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "./SignUp.css";

import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Github from "../../assets/github.png";
import Logo from "../../assets/logo.png";


const SignUpPage = () => {
    const navigate = useNavigate();

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);
    const [phone, setphone] = useState('');

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
        confirm_password: ""
    });

    const google = () => {
        window.open("http://localhost:5000/api/v1/auth/google", "_self");
      };
    
      const github = () => {
        window.open("http://localhost:5000/api/v1/auth/github", "_self");
      };
    
      const facebook = () => {
        window.open("http://localhost:5000/api/v1/auth/facebook", "_self");
      };

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { email, password, confirm_password } = inpval;

       if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else if (confirm_password === "") {
            toast.error("cpassword is required!", {
                position: "top-center"
            });
        }
        else if (confirm_password.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== confirm_password) {
            toast.error("pass and Cpass are not matching!", {
                position: "top-center"
            });
        } else {
            // console.log("user registration succesfully done");
            
           const { email, password, confirm_password} = inpval;
           axios.post("http://192.168.0.37:5000/api/v1/auth/signup", {
                 email, password, confirm_password
           }).then(res => {
            if (res.status == 200) {
                toast.success("Please Verify Phone Number 😃! ", {
                    position: "top-center"
                });
                
                navigate('/verify', {replace: true})

                setInpval({ ...inpval, email: "", password: "", confirm_password: "" });
            }
        })
        }
    }

    return (
        <>
            <section>
                <div className="form">
                    <div>
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="names">Full Names</label>
                            <input type="text" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Full Names' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Phone Number</label>
                            <PhoneInput
                              country={'us'}
                               value={phone}
                               onChange={phone => setphone(phone)}
                               searchStyle={{width: "40%"}}  
                               inputStyle={{width: "98%"}}
                             />
                        </div>
                        <div className="form_input" style={{marginTop: "10px"}}>
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} value={inpval.confirm_password} onChange={setVal} name="confirm_password" id="confitm_password" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata}>Sign Up</button>
                        <p>Already have an account? <NavLink to="/">Log In</NavLink></p>
                    </form>
                    </div>
                    <div className="left" style={{backgroundColor: "lightgray", height: "80vh", marginTop: -35, marginBottom: -37, marginRight: -10}}>
                        
                       <img src={Logo} alt="" className="ic" style={{width: "20vw", borderRadius: "50%"}} />
                       <div className="loginButton google" onClick={google}>
                         <img src={Google} alt="" className="icon" />
                         Google
                       </div>
                       <div className="loginButton facebook">
                         <img src={Facebook} alt="" className="icon" />
                         Facebook
                       </div>
                     </div>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default SignUpPage
