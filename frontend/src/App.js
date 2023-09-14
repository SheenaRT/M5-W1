import React from 'react';
import './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';



function App() {
  return (
    <div className="App">
      <h1>Message App</h1>
      <MessageForm />
      <MessageList />
    </div>
  );
}

export default App;
