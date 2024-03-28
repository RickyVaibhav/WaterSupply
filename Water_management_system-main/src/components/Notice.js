// NoticeFunc.js

import React from 'react';
import NoticeBoardPage from './NoticeBoardPage'; // Import the NoticeBoardPage component
import './Notice.css'; // Import your component-specific CSS file

function NoticeFunc() {
  return (
    <div className="notice-board-page-container">
      <div className="notice-board">
        <h2 className="notice-title">Notices</h2>
        <NoticeBoardPage /> {/* Render the NoticeBoardPage component here */}
      </div>
    </div>
  );
}

export default NoticeFunc;
