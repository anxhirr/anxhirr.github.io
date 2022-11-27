import React from 'react';
import PARTS from './PARTS';

const HangmanBody = ({ incorrectLetters, hasLost }) => {
  return (
    <>
      <div
        className={`hangman__drawing ${
          hasLost ? 'hangman__drawing--shake' : ''
        }`}
      >
        {PARTS.slice(0, incorrectLetters.length)}
        <div className={`hangman__drawing--stand `} />
        <div className='hangman__drawing--ground' />
      </div>
    </>
  );
};

export default HangmanBody;
