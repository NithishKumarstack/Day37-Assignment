import React, { useState } from "react";
import { Link } from "react-router-dom";
import  "../signup/signup.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://password-reset-j7ic.onrender.com/createUser', {name, email, password}).then(result=> {console.log(result)
        navigate('/login')}).catch(error=>console.log(error))
    };
    return(
         <div id="intro" className="d-flex justify-content-center align-items-center bg-image shadow-2-strong">
            <div id="hash"className="bg-white p-3 rounded w-50">
            <h2>-----------------------Register----------------------</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label>
                <strong>Name</strong>
            </label>
            <input type="text" placeholder="Enter a name" autoComplete="off" className="form-control rounded-0" onChange={(e)=>setName(e.target.value)}/>
            </div>
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
             Register
            </button>
            </form>
            <p>Already Have A Account?</p>
            <Link to="/login" className="btn btn-default border w-100 bg-light rounded-1 text-decoration-none">
                Login
            </Link>                
            </div>
         </div>
    )
};

export default Signup;