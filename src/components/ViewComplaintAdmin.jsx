import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Modal from 'bootstrap/js/dist/modal'; // Import Bootstrap modal JS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS file
import AdminNav from './AdminNav';

function ViewComplaintAdmin() {
  const [selectedName, setSelectedName] = useState(null); // State to store the selected name
  const [selectedEmail, setSelectedEmail] = useState(null); // State to store the selected email
  const [selectedDescription, setSelectedDescription] = useState(null); // State to store the selected description
  const storedName = JSON.parse(localStorage.getItem('clientName')) || [];
  const storedEmail = JSON.parse(localStorage.getItem('clientEmail')) || [];
  const storedProb = JSON.parse(localStorage.getItem('clientProb')) || [];

  useEffect(() => {
    // Initialize Bootstrap modal
    const modalElement = document.getElementById('exampleModal');
    const modal = new Modal(modalElement);
  }, []);

  const handleNameClick = (name, email, description) => {
    setSelectedName(name);
    setSelectedEmail(email);
    setSelectedDescription(description);
    const modal = new Modal(document.getElementById('exampleModal'));
    modal.show(); // Show the modal when a name is clicked
  };

  function setResponse() {
    const getResponse = document.getElementById('desc-res');
    const responseValue = getResponse.value;
    localStorage.setItem('Response', JSON.stringify(responseValue));
    alert("Value Saved !");
  }

  return (
    <>
      <AdminNav/>
      <div className="nameContainer">
        <h1>Names of the Client</h1>
        <div id="set-name" style={{display:'flex',gap:'20px'}}>
          {/* Display each name as a hyperlink */}
          {storedName.map((name, index) => (
            <a key={index} href="#" onClick={() => handleNameClick(name, storedEmail[index], storedProb[index])}>
              {name}
            </a>
          ))}
        
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Name: {selectedName}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {/* Modal Body */}
            <div className="modal-body">
              <p><h3>Email:</h3> {selectedEmail}</p>
              <p><h3>Description:</h3>{selectedDescription}</p>
              <h3>Response:</h3>
              <textarea rows='3' id='desc-res'></textarea>
              {/* Add more modal body content as needed */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={setResponse}>Submit</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {/* Add more buttons or actions as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewComplaintAdmin;
