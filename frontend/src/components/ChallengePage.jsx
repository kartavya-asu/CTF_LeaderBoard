import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';
import Flashcard from './FlashCard';

const ChallengePage = () => {
    const [challenges, setChallenges] = useState([]);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [attempts, setAttempts] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch challenges from the backend
    const fetchChallenges = async () => {
      const response = await axios.get('http://localhost:5555/challenges');
      setChallenges(response.data);
    };
    fetchChallenges();
  }, []);

  const handleHintToggle = () => {
    setChallenges(challenges.map((challenge, index) => {
      if (index === currentChallengeIndex && challenge.points > 0) {
        return { ...challenge, points: challenge.points - 3 };
      }
      return challenge;
    }));
  };

  const handleAnswerSubmit = async () => {
    if (attempts > 0) {
      try {
        const challengeId = challenges[currentChallengeIndex].id;
        const response = await axios.post('http://localhost:5555/challenges/submit', { challengeId, answer });
        if (response.data.correct) {
          alert("Correct answer!");
          // Update points in UI if needed
        } else {
          setAttempts(attempts - 1);
          alert("Wrong answer. Attempts left: " + (attempts - 1));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert("No more attempts left for this challenge.");
    }
  };

  const handleNext = () => {
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
      setAttempts(3); // Reset attempts for the new challenge
      setAnswer(''); // Clear the answer input
    } else {
      // Handle end of challenges, maybe show a "Submit Test" button
    }
  };

  const handlePrevious = () => {
    if (currentChallengeIndex > 0) {
      setCurrentChallengeIndex(currentChallengeIndex - 1);
      setAttempts(3); // Reset attempts for the new challenge
      setAnswer(''); // Clear the answer input
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl">
        {challenges.length > 0 && (
          <Flashcard 
            challenge={challenges[currentChallengeIndex]}
            // Pass other necessary props
          />
        )}

        <div className="flex justify-between mt-4">
          <button 
            onClick={handlePrevious} 
            disabled={currentChallengeIndex <= 0}
            className={`py-2 px-4 rounded ${currentChallengeIndex <= 0 ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-150'}`}
          >
            Previous
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentChallengeIndex >= challenges.length - 1}
            className={`py-2 px-4 rounded ${currentChallengeIndex >= challenges.length - 1 ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-green-500 hover:bg-green-700 text-white transition-colors duration-150'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChallengePage;