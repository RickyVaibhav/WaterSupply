// // SignupPage.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import AdminSignup from '../AdminSignup';
// import UserSignup from '../UserSignup';
// import './SignupPage.css'; // Import your component-specific CSS file

// function SignupPage() {
//   return (
//     <div className="signup-container">
//       <h1 className="signup-heading">Signup</h1>
//       <div className="signup-options">
//         <div className="signup-option">
//           <h2 className="option-heading">Admin Signup</h2>
//           <AdminSignup />
//           <button className="signup-button">Signup as Admin</button>
//         </div>
//         <div className="signup-option">
//           <h2 className="option-heading">User Signup</h2>
//           <UserSignup />
//           <button className="signup-button">Signup as User</button>
//         </div>
//       </div>
//       <div className="login-link">
//         Already registered? <Link to="/login" className="login-link">Login</Link>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './SignupPage.css'; // Import your CSS file for signup page styles

//   // State to manage selected role
//   const [selectedRole, setSelectedRole] = useState('user');

//   // Function to handle role selection
//   const handleRoleChange = (event) => {
//     setSelectedRole(event.target.value);
//   };

// function SignupPage() {
//   const [userData, setUserData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: 'user'
//   });

//   // Function to handle input change
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   // Function to handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Make a POST request to the backend signup endpoint
//       const response = await axios.post('http://localhost:5000/signup', userData);

//       // Handle success response (e.g., redirect to login page)
//       console.log(response.data); // Log response data or update UI accordingly
//     } catch (error) {
//       // Handle error response
//       console.error('Signup failed:', error.response.data); // Log error or show error message to user
//     }
//   };

//   return (
//     <div className="signup-page">
//       <h1>Signup</h1>
//       <form className="signup-form">
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" name="username" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input type="password" id="confirmPassword" name="confirmPassword" />
//         </div>
//         <div className="form-group">
//           <label>Role</label>
//           <div className="role-options">
//             <label>
//               <input
//                 type="radio"
//                 value="admin"
//                 checked={selectedRole === 'admin'}
//                 onChange={handleRoleChange}
//               />
//               Admin
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="user"
//                 checked={selectedRole === 'user'}
//                 onChange={handleRoleChange}
//               />
//               User
//             </label>
//           </div>
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//       <div className="login-link">
//         Already registered? <Link to="/login">Login</Link>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css'; // Import your CSS file for signup page styles

function SignupPage() {
  // State to manage selected role
  const [selectedRole, setSelectedRole] = useState('user');

  // Function to handle role selection
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  });

  // Function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  

  // Function to handle form submission
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     // Make a POST request to the backend signup endpoint
  //     const response = await axios.post('http://localhost:5000/signup', userData);

  //     // Check if the response is defined and contains data
  //     if (response?.data) {
  //       // Handle success response (e.g., redirect to login page)
  //       console.log(response.data); // Log response data or update UI accordingly
  //     } else {
  //       console.error('Signup failed: Invalid response'); // Log error or show error message to user
  //     }
  //   } catch (error) {
  //     // Handle error response
  //     console.error('Signup failed:', error.response.data); // Log error or show error message to user
  //   }
  // };
  // Function to handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();
  //try {
    // Make a POST request to the backend signup endpoint
    //await axios.post('http://localhost:5000/signup', userData);

    // Display success message
    window.alert('Signup successful!'); // Display prompt message
  // } catch (error) {
  //   // Handle error response
  //   console.error('Signup failed:', error.response.data); // Log error or show error message to user
  // }
};

  return (
    <div className="signup-page">
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={userData.username} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={userData.confirmPassword} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Role</label>
          <div className="role-options">
            <label>
              <input
                type="radio"
                value="admin"
                checked={selectedRole === 'admin'}
                onChange={handleRoleChange}
              />
              Admin
            </label>
            <label>
              <input
                type="radio"
                value="user"
                checked={selectedRole === 'user'}
                onChange={handleRoleChange}
              />
              User
            </label>
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
      <div className="login-link">
        Already registered? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;


