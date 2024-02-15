import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    let navigate = useNavigate();

    const handleStartClick = () => {
      navigate('/start'); // Redirects to the UserInputPage
    };
    
  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to CTF Fun!!</h1>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleStartClick}
      >
        Start
      </button>
    </div>
  )
}

export default Home