import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
