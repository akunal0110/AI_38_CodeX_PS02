function Message({ text, sender }) {
    return (
      <div
        className={`p-3 my-2 max-w-xs rounded-lg ${
          sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-700 text-white self-start"
        }`}
      >
        {text}
      </div>
    );
  }
  
  export default Message;
  