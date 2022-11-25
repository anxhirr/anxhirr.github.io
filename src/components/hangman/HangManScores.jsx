import React from 'react';

const HangManScores = (props) => {
  const { score, triesLeft, highestScore } = props;

  const lifes = 4 - triesLeft;

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
    </div>
  );
};

export default HangManScores;
