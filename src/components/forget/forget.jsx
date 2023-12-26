import React, { useState }from 'react';
import '../forget/forget.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Forget() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://password-reset-j7ic.onrender.com/resetpassword', {email}).then(result=>{console.log(result)
        navigate('/reset')
        }).catch(error=>{console.log(error)
        navigate('/')
        })
    }
  return (
    <div id="for" className="d-flex justify-content-center align-items-center bg-image shadow-2-strong">
      <div id="soft"className="bg-white p-3 rounded w-50">
      <h2>-------------------Generate OTP-------------------</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label>
        <strong>Email</strong>
      </label>
      <input type="email" placeholder="Enter a @email" autoComplete="off" className="form-control rounded-0" required onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary w-100 rounded-1 mb-3">
      Get OTP
      </button>
      </form>
      </div>
      </div>
  )
}

export default Forget;