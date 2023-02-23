import React, { useState,useEffect, useRef,  useContext, createContext} from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'; 
import './SignIn.css';
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";


const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

const SigninPage = () => {
  
  const {setAuth} = useContext(AuthProvider);

  const navigate = useNavigate();
  const location = useLocation();

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const from = location?.state?.from?.pathname || "/";

  const initialValues = { email: "", password: ""};

  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
      email: "",
      password: "",
  });

  const userRef = useRef();


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

  const google = () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };
 
  const addUserdata = async (e) => {
    e.preventDefault();

    // const { email, password, confirm_password } = inpval;

  //  if (email === "") {
  //       toast.error("email is required!", {
  //           position: "top-center"
  //       });
  //   } else if (!email.includes("@")) {
  //       toast.warning("includes @ in your email!", {
  //           position: "top-center"
  //       });
  //   } else if (password === "") {
  //       toast.error("password is required!", {
  //           position: "top-center"
  //       });
  //   } else if (password.length < 6) {
  //       toast.error("password must be 6 char!", {
  //           position: "top-center"
  //       });
  //   } else {
        // console.log("user registration succesfully done");
        
       const { email, password} = inpval;
      const response = axios.post("http://localhost:5000/api/v1/auth/signin", 
          JSON.stringify({email,password}),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
    );
    
    console.log(JSON.stringify(response?.data));
    //console.log(JSON.stringify(response));
    const accessToken = response?.data?.accessToken;
    const roleId = response?.data?.roleId;
    setAuth({ email, password, roleId, accessToken });
    navigate(from, { replace: true });
    // }
}

useEffect(() => {
  userRef.current.focus();
}, []);

  return (
    <section>
      <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
        </div>
      <form>
       
      <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} ref={userRef} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address' />
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
                        <button className='btn' onClick={addUserdata}>Login</button>
                        <p>Don't have an Account? <NavLink to="/signup">Sign Up</NavLink> </p>
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
        <ToastContainer />
      </div>
    </section>
  )
}

export default SigninPage;
