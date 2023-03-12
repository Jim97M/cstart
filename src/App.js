import React, {useState, useEffect, useMemo, useContext} from 'react';

window.React = React

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import SigninPage from './pages/signin/SigninPage';
import SignUpPage from './pages/signup/SignUpPage';
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Home from "./pages/home/Home";
import LayoutPage from './pages/layout/LayoutPage';
import {useNavigate, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import RequiredAuth from './pages/authorization_pages/RequiredAuth';
import VerifyOtpPage from './pages/auth/VerifyOtpPage';
import AdminPage from './pages/admin/AdminPage';
import ModulePage from './pages/modules/ModulePage';
import ForgotPassword from './pages/forgotpassword/forgotPassword';
import {LoginContext} from './context/context';

const App = () => {

  const [data, setData] = useState(false);

  const {logindata, setLoginData} = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async (req, res) => {
    const token = localStorage.getItem("userToken");
    // console.log("Your token is", token);

    const response = await fetch("http://localhost:5000/api/v1/auth/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)

      // history("/home");
    },2000)

  }, [])

  return (
    <>
  
    <Routes>
       <Route path='/' element={<SigninPage />} />
      <Route path='/signup' element={<SignUpPage />} />
     <Route path='verify' element={<VerifyOtpPage />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
     <Route path="/home" element={<Home />} />
     <Route path="/modules" element={<ModulePage />}  />
     <Route path="/admin" element={<AdminPage />} />
      
      {/* Protect This Route To Authenticated Users */}
     {/* <Route path="/home" element={<Home />} />
     <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
          <Route path="admin" element={<AdminPage />} /> */} 
    </Routes>
    </>

  )
}

export default App;
