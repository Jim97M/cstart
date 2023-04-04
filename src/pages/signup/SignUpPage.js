import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./SignUp.css";

import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Github from "../../assets/github.png";
import Logo from "../../assets/logo.png";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const [image_name, setImageName] = useState(null);
  const [passShow, setPassShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [cpassShow, setCPassShow] = useState(false);
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const google = () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/api/v1/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/api/v1/auth/facebook", "_self");
  };

  const selectFile = (event) => {
		setImageName(event.target.files[0]);
  };

  const phoneNumber = (value, country, event) => {
    setPhoneNumber({[event.target.value]: value })
  };

  const addUserdata = async (e) => {
    e.preventDefault();

    // const { email, password, confirm_password } = inpval;

    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else if (confirm_password === "") {
      toast.error("cpassword is required!", {
        position: "top-center",
      });
    } else if (confirm_password.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== confirm_password) {
      toast.error("pass and Cpass are not matching!", {
        position: "top-center",
      });
    } else {
      // console.log("user registration succesfully done");

      // const {
      //   email,
      //   fullname,
      //   phone_number,
      //   password,
      //   confirm_password,
      // } = inpval;
      const formdata = new FormData();

      formdata.append("email", email);
      formdata.append("fullname", fullname);
      formdata.append("phone_number", phone_number);
      formdata.append("password", password);
      formdata.append("confirm_password", confirm_password);
;
       await fetch("http://192.168.0.37:5000/api/v1/auth/signup", {
        method: "post",
        body: formdata
      }).then(res => {
        if(res.status === 403){
          toast.error("Email Already Exists Please User Another Email Address! ", {
            position: "top-center"
       });
        }
        if(res.status === 201){
                        toast.success("Please Verify Phone Number 😃! ", {
                  position: "top-center"
             });
        }
        AsyncStorage.setItem(JSON.stringify("User", res.json()));
        
      });
    }
  };
  //        axios.post("http://192.168.0.37:5000/api/v1/auth/signup", {
  //              email, password, confirm_password
  //        }).then(res => {
  //         if (res.status == 200) {
  //             toast.success("Please Verify Phone Number 😃! ", {
  //                 position: "top-center"
  //             });

  //             navigate('/verify', {replace: true})

  //             setInpval({ ...inpval, email: "", password: "", confirm_password: "" });
  //         }
  //     })
  //     }
  // }

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
                <input
                  type="text"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullname}
                  name="fullname"
                  id="fullname"
                  placeholder="Enter Your Full Names"
                />
              </div>
              <div className="form_input" style={{ marginTop: "10px" }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ marginRight: 60 }}
                  value={email}
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="form_input">
                <label htmlFor="phone">Phone Number</label>
                <PhoneInput
                  country={"us"}
                  value={phone_number}
                  onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                  searchStyle={{ width: "40%" }}
                  inputStyle={{ width: "98%" }}
                />
              </div>
              {/* <div className="container">
                <input
                  accept="image/*"
                  type="file"
                  name="image"
                  className="img_input"
                  placeholder="Select Image"
                  onChange={selectFile}
                  hidden
                />

                {selectedImage && (
                  <div className="preview">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      className="image"
                      alt="Thumb"
                    />
                    <button onClick={removeSelectedImage} className="delete">
                      Remove This Image
                    </button>
                  </div>
                )}
              </div> */}
              <div className="form_input" style={{marginTop: 13}}>
                <label htmlFor="password">Password</label>
                <div className="two">
                  <input
                    type={!passShow ? "password" : "text"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="form_input">
                <label htmlFor="password">Confirm Password</label>
                <div className="two">
                  <input
                    type={!cpassShow ? "password" : "text"}
                    value={confirm_password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirm_password"
                    id="confitm_password"
                    placeholder="Confirm password"
                  />
                  <div
                    className="showpass"
                    onClick={() => setCPassShow(!cpassShow)}
                  >
                    {!cpassShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>

              <button className="btn" onClick={addUserdata}>
                Sign Up
              </button>
              <p>
                Already have an account? <NavLink to="/">Log In</NavLink>
              </p>
            </form>
          </div>
          <div
            className="left"
            style={{
              backgroundColor: "lightgray",
              height: "80vh",
              marginTop: -36,
              marginBottom: -49,
              marginRight: -10,
            }}
          >
            <img
              src={Logo}
              alt=""
              className="ic"
              style={{ width: "20vw", borderRadius: "50%" }}
            />
            <div className="social_container">
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
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
