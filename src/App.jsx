import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Forget from "./components/forget/forget";
import Home from "./components/home/home";
import Reset from "./components/reset/reset";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/forget' element={<Forget/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/reset" element={<Reset/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
