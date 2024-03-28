import React from 'react';
import axios from 'axios';
import './ProblemReportForm.css'; // Import your component-specific CSS file
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function ProblemReportForm() {
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const getName = document.getElementById('name-input').value;
    const getEmail = document.getElementById('email-input').value;
    const getDesc = document.getElementById('desc-input').value;
    const nameData = JSON.parse(localStorage.getItem('clientName')) || [];
    const emailData = JSON.parse(localStorage.getItem('clientEmail')) || [];
    const descData = JSON.parse(localStorage.getItem('clientProb')) || [];
    nameData.push(getName);
    emailData.push(getEmail);
    descData.push(getDesc);
    localStorage.setItem('clientName', JSON.stringify(nameData));
    localStorage.setItem('clientEmail', JSON.stringify(emailData));
    localStorage.setItem('clientProb', JSON.stringify(descData));
    alert("Submitted Successfully !")
    setTimeout(() => {
      navigate('/home')
      
    }, 1000);

  };

  return (
    <>
      <Navbar />
      <div className="problem-report-form-container">
        <h2>Report a Problem</h2>
        {/* <p className="success-message">Complaint raised successfully</p> */}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" id='name-input' />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" id='email-input' />
          </div>
          <div className="form-group">
            <label>Problem Type:</label>
            <select name="problemType" id='list-select'>
              <option value="">Select a problem type</option>
              <option value="Water not coming">Water not coming</option>
              <option value="Low water pressure">Low water pressure</option>
              <option value="Water quality issue">Water quality issue</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" id='desc-input'></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ProblemReportForm;
