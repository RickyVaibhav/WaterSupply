import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import CSS file for LandingPage styles
import logo from './logo.png';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'; // Import specific functions from the 'firebase/auth' module

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBM9n3GWnJiWJcrTg7C-msDSsQomdqSofg",
  authDomain: "water-supply-d44e2.firebaseapp.com",
  projectId: "water-supply-d44e2",
  storageBucket: "water-supply-d44e2.appspot.com",
  messagingSenderId: "633808972808",
  appId: "1:633808972808:web:ea564474d67009325ef5bd"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);


function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage]=useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      // Redirect to home page after successful login
      setMessage("Login Successfull !")
      setTimeout(() => {
        
        navigate('/home');
      }, 1000);
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage("User not Found !")
      // Handle login error (display error message, etc.)
    }
  };

  return (
    <>
      <div className="landing-container landing-page">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="college-info">
          <p>BIT MESRA</p>
          <p>Water Supply Management</p>
        </div>
        <div className="content">
          <div className="login-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">Login</button>
              <br />
              <div className="admin-login">
                <Link to="/admin">Login as Admin !</Link>
              </div>
              <div>
                <p>{message}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
