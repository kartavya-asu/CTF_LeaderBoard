import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInputPage = () => {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  let navigate = useNavigate();

  const handlePlayClick = () => {
    // Here you would typically handle the user input, for now, we'll just navigate
    console.log(username, code); // Placeholder for actual logic
    navigate('/challenge'); // Assuming you have a route setup for the actual challenge
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Enter your details</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <input 
        type="text" 
        maxLength="3" 
        placeholder="3-letter code" 
        value={code} 
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        className="input input-bordered input-primary w-full max-w-xs mt-4"
      />
      <button 
        className="btn btn-primary mt-4"
        onClick={handlePlayClick}
      >
        Play
      </button>
    </div>
  );
};

export default UserInputPage;
