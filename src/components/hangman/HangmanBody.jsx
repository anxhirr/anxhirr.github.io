import React from 'react';

const BODY__PARTS = [
  <div className='hangman__drawing--head' key={1} />,
  <div className='hangman__drawing--body' key={2} />,
  <div className='hangman__drawing--left-arm' key={3} />,
  <div className='hangman__drawing--right-arm' key={4} />,
  <div className='hangman__drawing--left-leg' key={5} />,
  <div className='hangman__drawing--right-leg' key={6} />,
];

const HangmanBody = ({ incorrectLetters, hasLost, remainingTime }) => {
  let shouldPulse = remainingTime <= 3;
  const shouldHideHint = remainingTime === 0;
  if (remainingTime === 0) shouldPulse = false;

  return (
    <>
      <div
        className={`hangman__drawing ${
          hasLost ? 'hangman__drawing--shake' : ''
        }`}
      >
        <div
          className={`hangman__hint ${
            shouldPulse ? 'hangman__hint--pulse' : ''
          } ${
            shouldHideHint ? 'hangman__hint--hidden' : 'hangman__hint--visible'
          }
          
          `}
        >
          <span>Hint after:</span>
          <span>{remainingTime}</span>
        </div>
        <div className='hangman__drawing--down' />
        <div className={`hangman__drawing--right `} />
        <div className={`hangman__drawing--stand `} />
        <div className='hangman__drawing--ground' />
        {BODY__PARTS.slice(0, incorrectLetters.length)}
      </div>
    </>
  );
};

export default HangmanBody;
