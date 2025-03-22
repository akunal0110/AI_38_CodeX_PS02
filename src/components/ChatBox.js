import { useState, useRef, useEffect } from "react";
import Message from "./Message";

function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");
  
  // Create a reference to the chat container
  const chatRef = useRef(null);

  // Scroll to the latest message whenever the messages change
  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to send a message
  const sendMessage = () => {
    if (!input.trim()) return; // Don't send if input is blank

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate AI typing and response with delays
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "🤖 Typing...", sender: "ai" }
      ]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev.slice(0, -1), // Remove the "Typing..." message
          { text: "I'm still learning! Soon I'll fetch real data.", sender: "ai" }
        ]);
      }, 1500); // Real response after 1.5 seconds
    }, 1000); // Typing indicator after 1 second
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-900 text-white">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto flex flex-col space-y-2 p-2">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
        {/* This empty div ensures that the chat scrolls to the latest message */}
        <div ref={chatRef} />
      </div>

      {/* Input Box */}
      <div className="p-2 flex items-center bg-gray-800 rounded-lg">
        <input
          type="text"
          className="flex-1 p-2 rounded bg-gray-700 text-white focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-500 p-2 rounded text-white">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
