import React, { useState } from 'react';
import './ViewComplainPage.css'; // Import your CSS file for view complain page styles

function ViewComplainPage() {
  // Mock data for user complaints (replace with actual data from backend)
  const [complaints, setComplaints] = useState([
    { id: 1, username: 'User1', time: '3 hours ago', message: 'Complaint 1 message' },
    { id: 2, username: 'User2', time: '1 day ago', message: 'Complaint 2 message' },
    // Add more complaints as needed
  ]);

  // Function to handle reply submission
  const handleReplySubmit = (event, complaintId) => {
    event.preventDefault();
    // Implement logic to submit reply for the complaint with ID: complaintId
    console.log(`Reply submitted for complaint ID ${complaintId}`);
  };

  return (
    <div className="view-complain-page">
      <h1>View Complaints</h1>
      <div className="complaints-container">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="complaint-card">
            <div className="complaint-details">
              <div className="username">{complaint.username}</div>
              <div className="time">{complaint.time}</div>
            </div>
            <div className="complaint-message">{complaint.message}</div>
            <form className="reply-form" onSubmit={(event) => handleReplySubmit(event, complaint.id)}>
              <textarea placeholder="Write your reply..." required></textarea>
              <button type="submit">Submit Reply</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewComplainPage;
