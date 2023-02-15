import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin/SigninPage';
import SignUpPage from './pages/signup/SignUpPage';
import VerityOtpPage from './pages/auth/VerityOtpPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SigninPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/verify' element={<VerityOtpPage />} />
    </Routes>
  )
}

export default App;
