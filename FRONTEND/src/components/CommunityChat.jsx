import React, { useState, useEffect } from "react";
import io from "socket.io-client";


const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [socket, setSocket] = useState(null);


  // Initialize the socket connection when the component mounts
  useEffect(() => {
    const socketIo = io("http://localhost:5004/chat/community", 
      {
      transports: ["websocket"], // Force WebSocket transport
    }
  );

    // Set the socket connection in the state
    setSocket(socketIo);

    // Listen for incoming messages from the server
    socketIo.on("receive_message", (data) => {
      console.log("Message received on client:", data);
      setChat((prevChat) => [...prevChat, data]); // Append new message
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socketIo.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const chatMessage = { user: "User", text: message }; // Wrap message in an object
      socket.emit("send_message", chatMessage); // Send message to the server
      setMessage(""); // Clear input
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Chat App</h1>
        <div className="h-64 overflow-y-scroll border rounded-md p-2 mb-4">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`p-2 mb-2 rounded-lg ${
                msg.user === "User" ? "bg-blue-100 self-end" : "bg-gray-100"
              }`}
            >
              <span className="font-bold">{msg.user}:</span> {msg.text}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            className="input input-bordered w-full"
          />
          <button
            onClick={sendMessage}
            className="btn btn-primary"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
