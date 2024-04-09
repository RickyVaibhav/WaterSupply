// NoticeBoardPage.js

import React from 'react';
import './NoticeBoardPage.css'; // Import your component-specific CSS file

function NoticeBoardPage() {
  // Example notices data
  const notices = [
    { id: 1, title: "Notice 1", content: "Content of notice 1" },
    { id: 2, title: "Notice 2", content: "Content of notice 2" },
    { id: 3, title: "Notice 3", content: "Content of notice 3" }
  ];

  return (
    <div className="notice-board-page-container">
      <div className="notice-board">
        <h2 className="notice-title">Notices</h2>
        <ul className="notice-list">
          {notices.map(notice => (
            <li key={notice.id}>
              <h3>{notice.title}</h3>
              <p>{notice.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NoticeBoardPage;
