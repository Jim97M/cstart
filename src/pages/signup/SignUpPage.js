import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Github from "../../assets/github.png";

const SignUpPage = () => {

  return (
    <div className='container'>
      <div className='innerBox'>
        <h3 className='heading'>SignUp</h3>
         <div className='input'>
           <input type="text" placeholder="Email Address" />
         </div>
         <div className='input'>
           <input type="text" placeholder="Password" />
         </div>
         <div className='input'>
           <input type="text" placeholder="Password" />
         </div>
         <div className='footer'>
          <button>Login</button>
         </div>
         <div className='navigationLink'>
            <h3>Already Have an Account?</h3> <Link to="/" className='linkNav' >Sign In</Link>
         </div>
         <div style={{ display: "flex", alignItems: "center", marginLeft: "20px", marginRight: "20px" }}>
         <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "1px" }} />
 
         <p style={{ margin: "0 10px" }}>OR</p>
 
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "1px" }} />
         </div>
         <div className="left">
          <div className="loginButton google">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
         </div>
    </div>
  )
}

export default SignUpPage;
