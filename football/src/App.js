import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Forgotpassword from './components/Forgotpassword';
import Landingpage from './components/Landingpage';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AdminLogin from './admin/AdminLogin';
import AdminHome from './admin/AdminHome';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
        <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<Forgotpassword/>} />
          <Route path="home"element={<Home />} />
          <Route path="admin" element={<AdminLogin/>} />
          <Route path="adminhome" element={<AdminHome/>} />
         
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
