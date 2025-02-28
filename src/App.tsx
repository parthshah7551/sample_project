import React from "react";
import "./index.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Hello, Tailwind CSS!</h1>
        <p className="text-gray-600">This is a React app with Tailwind CSS.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
