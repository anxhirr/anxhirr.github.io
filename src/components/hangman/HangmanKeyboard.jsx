import React from 'react';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const HangmanKeyboard = (props) => {
  const {
    addGuessedLetter,
    disabled,
    startNewGame,
    inactiveLetters,
    correctLetters,
  } = props;

  console.log(disabled);

  return (
    <div className='hangman__keyboard'>
      {KEYS.map((key) => {
        const isWrong = inactiveLetters.includes(key);
        const isCorrect = correctLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`hangman__key ${isWrong ? 'hangman__key--wrong ' : ''} ${
              disabled ? 'hangman__key--no-hover' : ''
            } ${isCorrect ? 'hangman__key--correct' : ''} 
            
            `}
            disabled={disabled || isWrong}
          >
            {key}
          </button>
        );
      })}
      <button
        onClick={() => startNewGame()}
        className={`hangman__key hangman__key--new-game ${
          disabled ? 'hangman__key--new-game--pulse' : ''
        }`}
      >
        New Game
      </button>
    </div>
  );
};

export default HangmanKeyboard;
