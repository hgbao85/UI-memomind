import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Gọi API để lấy phản hồi từ AI (ví dụ: thông qua fetch)
      // Sau đó thêm phản hồi từ AI vào messages
      setInput('');
    }
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập đoạn văn........"
      />
      <button onClick={handleSend}>Gửi</button>
    </div>
  );
};

export default Chat;
