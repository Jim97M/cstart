import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin/SigninPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SigninPage />} />
    </Routes>
  )
}

export default App;
