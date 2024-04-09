// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function LoginPage() {
// //   const handleLogin = () => {
// //     // Implement login logic here
// //   };

// //   return (
// //     <div>
// //       <h1>Login</h1>
// //       <form onSubmit={handleLogin}>
// //         <div>
// //           <label htmlFor="username">Username:</label>
// //           <input type="text" id="username" name="username" />
// //         </div>
// //         <div>
// //           <label htmlFor="password">Password:</label>
// //           <input type="password" id="password" name="password" />
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //       <div>
// //         Not registered yet? <Link to="/signup">Signup</Link>
// //       </div>
// //     </div>
// //   );
// // }

// // export default LoginPage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import AdminSignup from '../AdminSignup'; // Adjust the path for AdminSignup
// import UserSignup from '../UserSignup'; // Adjust the path for UserSignup

// function LoginPage() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <AdminSignup /> {/* Render the AdminSignup component */}
//       <UserSignup /> {/* Render the UserSignup component */}
//       <div>
//         Not registered yet? <Link to="/signup">Signup</Link>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import your CSS file for login page styles

function LoginPage() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="login-option admin-login">
        <h2>Admin Login</h2>
        {/* Render the Admin login form or button */}
        {/* Example: <AdminLogin /> */}
        <Link to="/admin-login">Login as Admin</Link>
      </div>
      <div className="login-option user-login">
        <h2>User Login</h2>
        {/* Render the User login form or button */}
        {/* Example: <UserLogin /> */}
        <Link to="/user-login">Login as User</Link>
      </div>
      {/* <div className="signup-link">
        Not registered yet? <Link to="/signup">Signup</Link>
      </div> */}
    </div>
  );
}

export default LoginPage;

