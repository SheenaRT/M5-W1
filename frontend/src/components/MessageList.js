import React, { useState, useEffect } from 'react';
import axios from 'axios'

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <ul>
      {messages.map((message) => (
        <li key={message._id}>{message.message}</li>
      ))}
    </ul>
  );
}

export default MessageList;
