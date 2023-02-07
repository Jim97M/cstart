import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'; 
import './SignIn.css';
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Github from "../../assets/github.png";



const SigninPage = () => {

  const initialValues = { email: "", password: ""};

  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
      email: "",
      password: "",
  });

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

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.email){
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "This email is invalid"
    }
    if(!values.password) {
      errors.password("Password is required");
    } else if(values.passoword.length < 4) {
      errors.password = "Password is Short"
    } else if (values.password.length > 15){
      errors.password = "Password Cannot exceed 15 Characters"
    }
    return errors;
  }

  const google = () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };

    const login = () => {
       
    }

  return (
    <section>
      <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
        </div>
      <form>
       
      <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn'>Login</button>
                        <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p>
          </form>
         <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
        </div>
      </div>
    </section>
  )
}

export default SigninPage;
