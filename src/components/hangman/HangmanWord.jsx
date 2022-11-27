import React from 'react';
import { useSelector } from 'react-redux';

const HangmanWord = (props) => {
  const { guessedLetters, hasLost, hasWon } = props;

  const { toGuessWord } = useSelector((state) => state.hangman);

  return (
    <div className='hangman__word'>
      {toGuessWord.split('').map((letter, index) => {
        const revealCSS = guessedLetters.includes(letter) || hasLost;
        const colorCSS = !guessedLetters.includes(letter) && hasLost;

        return (
          <span key={index} className='hangman__letter--border'>
            <span
              key={index}
              className={`${
                revealCSS
                  ? 'hangman__letter--visible'
                  : 'hangman__letter--hidden'
              } ${
                colorCSS ? 'hangman__letter--red' : 'hangman__letter--black'
              } ${hasWon ? 'hangman__letter--winner' : ''}`}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;
