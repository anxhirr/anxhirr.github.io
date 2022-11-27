import React from 'react';
import { useSelector } from 'react-redux';
import HangmanTime from './HangmanTime';

const HangManDashboard = ({ hasLost, handleTimeOut }) => {
  const { score } = useSelector((state) => state.hangman);
  const { lifes } = useSelector((state) => state.hangman);
  const { highestScore } = useSelector((state) => state.hangman);

  return (
    <div className='hangman__scores'>
      <div className='hangman__scores--score'>
        <span>Score:</span>
        <span>{score}</span>
      </div>
      <div className='hangman__scores--higest-score'>
        <span>Highest-Score:</span>
        <span>{highestScore}</span>
      </div>
      <div className='hangman__scores--lifes'>
        <span>Lifes Left: </span>
        <span>{lifes}</span>
      </div>

      <HangmanTime handleTimeOut={handleTimeOut} hasLost={hasLost} />
    </div>
  );
};

export default HangManDashboard;
