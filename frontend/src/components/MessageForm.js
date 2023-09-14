import React, { useState } from 'react';
import axios from 'axios';

function MessageForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return; 

    try {
      await axios.post('/api/messages', { message });
      console.log('Message created');
      setMessage(''); 
    } catch (error) {
      console.error('Error creating message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MessageForm;

