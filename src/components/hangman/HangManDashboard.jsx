import React from 'react';

const HangManDashboard = (props) => {
  const { remainingTime, score, highestScore, lifes, hasLost } = props;

  let shouldPulse = remainingTime <= 3;
  const shouldHideHint = remainingTime === 0;
  if (remainingTime === 0) shouldPulse = false;
  if (hasLost) shouldPulse = false;

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

      <div
        className={`hangman__scores-hint ${
          shouldPulse ? 'hangman__scores-hint--pulse' : ''
        } ${
          shouldHideHint || hasLost
            ? 'hangman__scores-hint--hidden'
            : 'hangman__scores-hint--visible'
        }`}
      >
        <span>Hint after:</span>
        <span>{remainingTime}</span>
      </div>
    </div>
  );
};

export default HangManDashboard;
