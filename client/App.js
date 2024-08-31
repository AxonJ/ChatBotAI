import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (message.trim() !== '') {
      const userMessage = { sender: 'user', text: message };
      setChat([...chat, userMessage]);
      try {
        const response = await axios.post('http://localhost:5000/api/chatbot/message', { message });
        const botMessage = { sender: 'bot', text: response.data.response };
        setChat([...chat, userMessage, botMessage]);
      } catch (error) {
        const botMessage = { sender: 'bot', text: 'Error: Unable to get a response from the server.' };
        setChat([...chat, userMessage, botMessage]);
      }
      setMessage('');
    }
  };

  return (
    <div className="app">
      <div className="chat-container">
        <h2>ChatbotAI</h2>
        <div className="chat-box">
          {chat.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div className="message-text">{msg.text}</div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            className="message-input"
          />
          <button onClick={sendMessage} className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
