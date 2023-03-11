import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
} from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./SignIn.css";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Logo from "../../assets/logo.png";

// const AuthContext = createContext({});

// const AuthProvider = ({children}) => {
//   const [auth, setAuth] = useState({});
//   return (
//     <AuthContext.Provider value={{auth, setAuth}}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

const SigninPage = () => {
  // const {setAuth} = useContext(AuthProvider);

  const history = useNavigate();
  const location = useLocation();

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [passShow, setPassShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [cpassShow, setCPassShow] = useState(false);

  const from = location?.state?.from?.pathname || "/";

  const initialValues = { email: "", password: "" };

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
        [name]: value,
      };
    });
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

    const { email, password } = inpval;
    axios
      .post("http://192.168.0.37:5000/api/v1/auth/signin", { email, password })
      .then((res) => {
        console.log(JSON.stringify(res.data));
        //console.log(JSON.stringify(response));

        if (res.status === 200) {
          localStorage.setItem("userToken", JSON.stringify(res.data));
          history("/home");
          setInpval({ ...inpval, email: "", password: "" });
        } else {
          toast.error("Invalid Credentials", {
            position: "top-center",
          });
        }
      });
  };
  useEffect(() => {
    addUserdata();
  }, []);

  return (
    <>
    <section>
      <div className="form">
        <div>
          <div className="form_heading">
            <h2>Login To Your Account</h2>
          </div>
          <form>
            <div className="form_input" style={{ marginTop: "10px" }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setVal}
                style={{ marginRight: 60 }}
                value={inpval.email}
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  value={inpval.password}
                  onChange={setVal}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <p style={{color: "black", fontWeight: 'bold', marginLeft: '16vw'}}>Forgot Password? <NavLink to="/forgotpassword">Click Here</NavLink> </p> 
            <button className="btn" onClick={addUserdata}>
              Sign In
            </button>
           
            <p style={{color: "black", fontWeight: 'bold'}}>Don't have an Account? <NavLink to="/signup">Sign Up</NavLink> </p>
          </form>
        </div>
        <div
          className="left"
          style={{
            backgroundColor: "lightgray",
            height: "84vh",
            marginTop: -35,
            marginBottom: -47,
            marginRight: -10,
          }}
        >
          <img
            src={Logo}
            alt=""
            className="ic"
            style={{ width: "20vw", borderRadius: "50%" }}
          />
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
  );
};

export default SigninPage;
