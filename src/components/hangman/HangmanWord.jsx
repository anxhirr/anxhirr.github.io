import React from 'react';

const HangmanWord = ({ toGuessWord, guessedLetters, hasWon }) => {
  return (
    <div className='hangman__word'>
      {toGuessWord.split('').map((letter, index) => (
        <span key={index} className='hangman__letter--border'>
          <span
            key={index}
            className={`${
              guessedLetters.includes(letter)
                ? 'hangman__letter--visible'
                : 'hangman__letter--hidden'
            }
                ${hasWon ? 'hangman__letter--winner' : ''}
              `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
