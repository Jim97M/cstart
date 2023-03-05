import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import  Box  from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import '../../style/form.css';
import { FaLess } from 'react-icons/fa';

const ForgotPassword = () => {
    const {id, token} = useParams();
    const [data2, setData] = useState(true);
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

  return (
    <>
     {
        data2 ? (
            <>
             <section>
                <div className='form_data'>
                  <div className='form_heading'>
                   <h1>Enter Your New Password</h1>
                  </div>
                  <form>
                    {message ? <p style={{color: "green", fontWeight: "bold"}}>Password Succesfully Update</p> : ""}
                    <div className='form_input'>
                        <label htmlFor='password'> New Password </label>
                        <input type='password' value={password} name='password' id="password" placeholder='Enter Your new Password' />
                    </div>
                    <button className='btn'>Send</button>
                  </form>
                  <p><NavLink to="/home">Home</NavLink> </p>
                  <ToastContainer />
                </div>
             </section>
            </>
        ) : <Box sx={{display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh"}} >
             Loading... &nbsp;
            <CircularProgress />
        </Box>
     }
    </>
  )
}

export default ForgotPassword;
