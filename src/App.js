import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin/SigninPage';
import SignUpPage from './pages/signup/SignUpPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SigninPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  )
}

export default App;
