import React from "react";
import "../login/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('https://password-reset-j7ic.onrender.com/login', {email, password}).then(result=>{console.log(result)
      navigate('/home')}).catch(error=>{console.log(error)
        navigate('/')
      })
    };
    return(
      <div id="log" className="d-flex justify-content-center align-items-center bg-image shadow-2-strong">
      <div id="lite"className="bg-white p-3 rounded w-50">
      <h2>------------------------Login-----------------------</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label>
        <strong>Email</strong>
      </label>
      <input type="email" placeholder="Enter a @email" autoComplete="off" className="form-control rounded-0" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="mb-3">
      <label>
        <strong>Password</strong>
      </label>
      <input type="password" placeholder="Enter a password" autoComplete="off" className="form-control rounded-0" onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-success w-100 rounded-1 mb-3">
      Login
      </button>
      </form>
      <div className="d-flex p-1 justify-content-around">
      <p>Create An Account?</p><span><Link to='/forget'>Forget Password?</Link></span>
      </div>
      <Link to='/'type="submit" className="btn btn-default w-100 rounded-1">
      Register
      </Link>
      </div>
      </div>
    )
};

export default Login;