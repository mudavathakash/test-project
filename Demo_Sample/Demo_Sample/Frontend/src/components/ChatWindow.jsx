import React, { useEffect, useState } from 'react';
import { connectSocket, sendMessage, onMessage } from '../services/socket';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    connectSocket();
    onMessage(msg => setMessages(prev => [...prev, msg]));
  }, []);

  const handleSend = () => {
    sendMessage(input);
    setMessages(prev => [...prev, { user: 'Me', text: input }]);
    setInput('');
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i}><strong>{msg.user}:</strong> {msg.text}</div>
        ))}
      </div>
      <div className="input-bar">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
