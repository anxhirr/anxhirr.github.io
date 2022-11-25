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
    hasLost,
    hasWon,
    startNewGame,
    inactiveLetters,
    correctLetters,
    keyHint,
  } = props;

  const disabled = hasLost || hasWon;

  return (
    <div className='hangman__keyboard'>
      {KEYS.map((key) => {
        const isWrong = inactiveLetters.includes(key);
        const isCorrect = correctLetters.includes(key);
        const isDisabled = disabled || isWrong || isCorrect;
        let shouldShowHint = keyHint === key;
        if (isCorrect) shouldShowHint = false;

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`hangman__key 
            ${isWrong ? 'hangman__key--wrong ' : ''} 
            ${disabled ? 'hangman__key--no-hover' : ''} 
            ${isCorrect ? 'hangman__key--correct' : ''} 
            ${shouldShowHint && !hasLost ? 'hangman__key--hint' : ''} 
            `}
            disabled={isDisabled}
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
