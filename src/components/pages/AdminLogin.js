import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage]=useState('');
  const navigate=useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the credentials match the admin credentials
    if (email === "admin@gmail.com" && password === "admin@123") {
      // Redirect to the admin home page
      navigate('/adminHome');
    } else {
      setMessage("Error in Authentication");
      // message
    }
  };

  return (
    <>
      <div className="login-form-container">
        <h2>Admin Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" id='input-email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" id='input-pass' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login as Admin</button>
          <div>
            <p id='msg-dsp' >{message}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
