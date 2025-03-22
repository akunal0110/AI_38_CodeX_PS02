import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className={`p-4 flex justify-between ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-bold">AI Sentinel</h1>
      <div className="flex items-center">
        {/* Links for navigation */}
        <Link className="mx-4" to="/">Home</Link>
        <Link className="mx-4" to="/dashboard">Dashboard</Link>
        <Link className="mx-4" to="/chat">Chat</Link>
        
        {/* Dark/Light mode toggle button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 ml-4 bg-blue-500 text-white rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
