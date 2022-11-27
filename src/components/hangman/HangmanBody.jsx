import React from 'react';

export const PARTS = [
  <div className={`hangman__drawing--right `} key={1} />,
  <div className='hangman__drawing--down' key={2} />,
  <div className='hangman__drawing--head' key={3} />,
  <div className='hangman__drawing--body' key={4} />,
  <div className='hangman__drawing--left-arm' key={5} />,
  <div className='hangman__drawing--right-arm' key={6} />,
  <div className='hangman__drawing--left-leg' key={7} />,
  <div className='hangman__drawing--right-leg' key={8} />,
];

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
