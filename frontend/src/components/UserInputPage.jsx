import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';

const UserInputPage = () => {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  let navigate = useNavigate();

  const handlePlayClick = async () => {
    if (!username.trim()) {
      alert("Username cannot be empty.");
      return;
    }
  
    if (!code.trim()) {
      alert("Cipher Code cannot be empty.");
      return;
    }
  
    if (code.length > 3) {
      alert("Cipher Code cannot be more than 3 characters long.");
      return;
    }
  
    const data = { username, code };
  
    try {
      const response = await axios.post('http://localhost:5555/users', data);
      console.log('User Created', response.data);
  
      // Store the code in session storage upon successful creation
      sessionStorage.setItem('userCode', code);
  
      navigate('/challenges');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message); // Show error message from backend
      }
    }
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-6">Enter your details</h2>
      
      <div className="mb-4 w-full max-w-xs">
        <label htmlFor="username" className="block text-black font-bold mb-2">Name:</label>
        <input 
          type="text" 
          id="username"
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          className="input input-bordered input-primary w-full p-2"
        />
      </div>
      
      <div className="mb-6 w-full max-w-xs">
        <label htmlFor="code" className="block text-black font-bold mb-2">Cipher Code:</label>
        <input 
          type="text" 
          id="code"
          maxLength="3" 
          placeholder="3-letter code" 
          value={code} 
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          className="input input-bordered input-primary w-full p-2"
        />
        <p className="text-xs mt-2 text-black">Cipher code can be any combination of letters and numbers and must be 3 characters long.</p>
      </div>

      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-150 ease-in-out"
        onClick={handlePlayClick}
      >
        Play
      </button>
    </div>
  );
};

export default UserInputPage;