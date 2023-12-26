import React, { useState } from 'react';
import axios from 'axios';
import '../reset/reset.css';
import { useNavigate } from 'react-router-dom';

function Reset() {
  const [token, setOTP] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setREPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post(`https://password-reset-j7ic.onrender.com/${token}`, {
        password,
      });
      if (response.status === 200) {
        alert('Password reset successfully!');
        navigate('/login');
      } else {
        alert(`Password reset failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      alert('An error occurred during password reset. Please try again.....');
    }
  };
  return (
    <div id="re" className="d-flex justify-content-center align-items-center bg-image shadow-2-strong">
      <div id="hit" className="bg-white p-3 rounded w-50">
        <h2>------------------Reset Password------------------</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>
              <strong>OTP</strong>
            </label>
            <input type="text" placeholder="Enter a OTP" autoComplete="off" className="form-control rounded-0" required onChange={(e) => setOTP(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>
              <strong>Enter a Password</strong>
            </label>
            <input type="password" placeholder="Enter a password" autoComplete="off" className="form-control rounded-0" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>
              <strong>Reenter a Password</strong>
            </label>
            <input type="password" placeholder="Enter a password" autoComplete="off" className="form-control rounded-0" required onChange={(e) => setREPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-1 mb-3">
            Create New Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
