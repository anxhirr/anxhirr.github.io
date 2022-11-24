import React from 'react';

const BODY__PARTS = [
  <div className='hangman__drawing--head' key={1} />,
  <div className='hangman__drawing--body' key={2} />,
  <div className='hangman__drawing--left-arm' key={3} />,
  <div className='hangman__drawing--right-arm' key={4} />,
  <div className='hangman__drawing--left-leg' key={5} />,
  <div className='hangman__drawing--right-leg' key={6} />,
];

const HangmanBody = ({ incorrectLetters }) => {
  return (
    <>
      <div className='hangman__drawing'>
        <div className='hangman__drawing--down' />
        <div className='hangman__drawing--right' />
        <div className='hangman__drawing--stand' />
        <div className='hangman__drawing--ground' />
        {BODY__PARTS.slice(0, incorrectLetters.length)}
      </div>
    </>
  );
};

export default HangmanBody;
