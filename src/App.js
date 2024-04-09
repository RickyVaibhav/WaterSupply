// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import ProblemReportForm from './components/ProblemReportForm';
// import WaterQualityCheck from './components/WaterQualityCheck';
// import './App.css'; // Import your CSS file for global styles
// import NoticeFunc from './components/Notice'; // Import the Notice component
// import SignupPage from './components/pages/SignupPage'; // Adjust the path for SignupPage
// import LoginPage from './components/pages/LoginPage'; // Adjust the path for LoginPage

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/report-problem" element={<ProblemReportForm />} />
//             <Route path="/water-quality" element={<WaterQualityCheck />} />
//             <Route path="/notice-view" element={<NoticeFunc />} />
//             {/* Add routes for login and signup */}
//             <Route path="/signup" element={<SignupPage />} />
//             <Route path="/login" element={<LoginPage />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import ProblemReportForm from './components/ProblemReportForm';
// import WaterQualityCheck from './components/WaterQualityCheck';
// import LoginPage from './components/pages/LoginPage'; // Import LoginPage component
// import SignupPage from './components/pages/SignupPage'; // Import SignupPage component
// import './App.css'; // Import your CSS file for global styles
// import NoticeFunc from './components/Notice'; // Import the Notice component

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/report-problem" element={<ProblemReportForm />} />
//             <Route path="/water-quality" element={<WaterQualityCheck />} />
//             <Route path="/notice-view" element={<NoticeFunc />} />
//             <Route path="/login" element={<LoginPage />} /> {/* Add route for LoginPage */}
//             <Route path="/signup" element={<SignupPage />} /> {/* Add route for SignupPage */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js
// App.js
// App.js
// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import Home from './components/Home';
// import ProblemReportForm from './components/ProblemReportForm';
// import WaterQualityCheck from './components/WaterQualityCheck';
// import LoginPage from './components/pages/LoginPage';
// import SignupPage from './components/pages/SignupPage';
// import './App.css'; // Import your CSS file for global styles
// import NoticeFunc from './components/Notice'; // Import the Notice component

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<LandingPage />} /> {/* LandingPage as the initial route */}
//             <Route path="/home" element={<Home />} />
//             <Route path="/report-problem" element={<ProblemReportForm />} />
//             <Route path="/water-quality" element={<WaterQualityCheck />} />
//             <Route path="/notice-view" element={<NoticeFunc />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/signup" element={<SignupPage />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ProblemReportForm from './components/ProblemReportForm';
import WaterQualityCheck from './components/WaterQualityCheck';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import './App.css'; // Import your CSS file for global styles
import NoticeFunc from './components/Notice'; // Import the Notice component
import Navbar from './components/Navbar';
import ViewComplainPage from './components/ViewComplainPage';
import AdminLogin from '../src/components/pages/AdminLogin';
import AdminHome from './components/pages/AdminHome';
import ViewResponse from './components/ViewResponse';
import ViewComplaintAdmin from './components/ViewComplaintAdmin';
import WaterQualityAdmin from './components/WaterQualityAdmin';
import NoticeAdmin from './components/NoticeAdmin';


function App() {
  return (
    <Router>
      <div className="app">
      {/* <Navbar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* LandingPage as the initial route */}
            <Route path="/home" element={<Home />} />
            <Route path="/report-problem" element={<ProblemReportForm />} />
            <Route path="/water-quality" element={<WaterQualityCheck />} />
            <Route path="/notice-view" element={<NoticeFunc />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/view-complain" element={<ViewComplainPage />} />
            <Route path="/admin" element={<AdminLogin/>} />
            <Route path="/adminHome" element={<AdminHome/>} />
            <Route path="/adminComplaint" element={<ViewComplaintAdmin/>} />
            <Route path="/response" element={<ViewResponse/>} />
            <Route path="/water-quality-admin" element={<WaterQualityAdmin/>} />
            <Route path="/notice-admin" element={<NoticeAdmin/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;