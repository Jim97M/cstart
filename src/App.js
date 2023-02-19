import React, {useState, useEffect, useMemo} from 'react';
window.React = React

import SigninPage from './pages/signin/SigninPage';
import SignUpPage from './pages/signup/SignUpPage';
import VerityOtpPage from './pages/auth/VerityOtpPage';
import List from "./pages";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import New from "./pages/new/New";
import { Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
const App = () => {

  return (
    <Routes>
    <Route path="/">
            <Route index element={<Home />} />
      <Route path='/signin' element={<SigninPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/verify' element={<VerityOtpPage />} />
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
    </Routes>
  )
}

export default App;
