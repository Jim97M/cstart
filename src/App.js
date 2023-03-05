import React, {useState, useEffect, useMemo} from 'react';
window.React = React

import SigninPage from './pages/signin/SigninPage';
import SignUpPage from './pages/signup/SignUpPage';
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Home from "./pages/home/Home";
import LayoutPage from './pages/layout/LayoutPage';
import { Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import RequiredAuth from './pages/authorization_pages/RequiredAuth';
import VerifyOtpPage from './pages/auth/VerifyOtpPage';
import AdminPage from './pages/admin/AdminPage';
import ModulePage from './pages/modules/ModulePage';
import ForgotPassword from './pages/forgotpassword/forgotPassword';

const ROLES = {
  'student': 1,
  'faculty': 2,
  'admin': 3,
}

const App = () => {

  return (
    <Routes>
    <Route path="/" element={<LayoutPage />}>
      <Route path='signin' element={<SigninPage />} />
      <Route path='signup' element={<SignUpPage />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
     <Route path="/home" element={<Home />} />
     <Route path="/modules" element={<ModulePage />}  />
      
      {/* Protect This Route To Authenticated Users */}
   <Route element={<RequiredAuth allowedRoles={[ROLES.student]} />}>
     <Route path="/home" element={<Home />} />
     <Route path='verify' element={<VerifyOtpPage />} />
     <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
   </Route>
   <Route element={<RequiredAuth allowedRoles={[ROLES.admin]} />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
 </Route>
    </Routes>

  )
}

export default App;
