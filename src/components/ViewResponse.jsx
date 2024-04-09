import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function ViewResponse() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Retrieve response from localStorage when component mounts
    const storedResponse = JSON.parse(localStorage.getItem('Response'));
    if (storedResponse) {
      setResponse(storedResponse);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <Navbar />
      <h1>Response!</h1>
      <p id='para-response'>{response}</p>
    </>
  );
}

export default ViewResponse;
